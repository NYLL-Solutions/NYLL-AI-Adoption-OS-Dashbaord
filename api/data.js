import { getClient, getNotionDatabases } from "../notion.config.js";

// Accepte un lien Notion collé tel quel ou un ID brut de 32 caractères
const toDbId = v => (String(v || "").match(/[0-9a-f]{32}/i) || [])[0] || null;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { source } = req.body || {};
  const TOKEN = process.env.NOTION_TOKEN;

  if (!TOKEN) {
    return res.status(500).json({
      error: "NOTION_TOKEN absent. Local : fichier .env. Prod : Vercel > Settings > Environment Variables.",
    });
  }

  const NOTION_DATABASES = getNotionDatabases();
  const clientName = getClient().nom;

  const known = Object.keys(NOTION_DATABASES);
  if (!known.includes(source)) {
    return res.status(400).json({
      error: `Source inconnue : "${source}". Sources valides : ${known.join(", ")}`,
    });
  }

  const dbId = toDbId(NOTION_DATABASES[source]);
  if (!dbId) {
    return res.status(400).json({
      error: `La base "${source}" n'est pas configuree. Definis la variable d'environnement correspondante (voir notion.config.js).`,
    });
  }

  try {
    // Fetch all pages from Notion database
    let results = [];
    let cursor = undefined;

    do {
      const body = { page_size: 100 };
      if (cursor) body.start_cursor = cursor;

      const r = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await r.json();
      if (!r.ok) {
        const notionCode = data.code || "";
        let msg = data.message || "Notion API error";

        if (notionCode === "object_not_found") {
          msg = `La base "${source}" est introuvable. Cause la plus probable : elle n'est pas partagee avec l'integration Notion. Dans Notion, ouvre la base > "..." > Connexions > ajoute l'integration. Verifie ensuite le lien configure.`;
        } else if (notionCode === "unauthorized") {
          msg = "Token Notion invalide ou expire. Verifie NOTION_TOKEN dans Vercel > Settings > Environment Variables.";
        } else if (notionCode === "validation_error") {
          msg = `Le lien configure pour "${source}" ne pointe pas vers une base de donnees Notion valide (c'est peut-etre une page, ou une vue liee).`;
        }

        return res.status(r.status === 401 ? 500 : 400).json({ error: msg, notionCode });
      }

      results = results.concat(data.results || []);
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);

    // Normalize Notion page properties to flat objects
    const normalized = results.map(page => {
      const props = page.properties || {};
      const flat = { _id: page.id };
      for (const [key, val] of Object.entries(props)) {
        flat[key] = extractValue(val);
      }
      return flat;
    });

    res.status(200).json({ data: normalized, clientName });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

function extractValue(prop) {
  if (!prop) return null;
  switch (prop.type) {
    case "title":
      return prop.title?.map(t => t.plain_text).join("") || null;
    case "rich_text":
      return prop.rich_text?.map(t => t.plain_text).join("") || null;
    case "select":
      return prop.select?.name || null;
    case "multi_select":
      return prop.multi_select?.map(s => s.name).join(", ") || null;
    case "number":
      return prop.number ?? null;
    case "formula":
      return prop.formula?.number ?? prop.formula?.string ?? null;
    case "date":
      return prop.date?.start || null;
    case "checkbox":
      return prop.checkbox ? "Yes" : "No";
    case "relation":
      return prop.relation?.map(r => r.id).join(", ") || null;
    case "rollup":
      return prop.rollup?.number ?? null;
    default:
      return null;
  }
}