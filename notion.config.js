// ════════════════════════════════════════════════════════════
//  CONFIGURATION DU DASHBOARD
//
//  Les valeurs viennent des VARIABLES D'ENVIRONNEMENT.
//  Ce fichier ne contient aucune valeur client : il decrit
//  seulement quelles variables sont attendues.
//
//  Ou les definir :
//   - En local  : fichier .env a la racine (non commite)
//   - En prod   : Vercel > Project > Settings > Environment Variables
//
//  Variables attendues :
//   CLIENT_NAME           Nom affiche dans l'en-tete
//   NOTION_TOKEN          Secret de l'integration (jamais ici)
//   NOTION_DB_FRICTIONS   Lien Notion de la base Frictions / Gaspillages
//   NOTION_DB_HABITS      Lien Notion de la base Habitudes / PDCA
//   NOTION_DB_AITASKS     Lien Notion de la base Taches activees par l'IA
//   NOTION_DB_VALUES      Lien Notion de la base Valeurs
//
//  Pour recuperer un lien : dans Notion, ouvre la base en page
//  pleine > "..." > Copier le lien. Colle le lien complet, le
//  code en extrait l'identifiant automatiquement.
// ════════════════════════════════════════════════════════════

export const getClient = () => ({
  nom: process.env.CLIENT_NAME || "",
});

export const getNotionDatabases = () => ({
  frictions: process.env.NOTION_DB_FRICTIONS || "",
  habits:    process.env.NOTION_DB_HABITS    || "",
  aiTasks:   process.env.NOTION_DB_AITASKS   || "",
  values:    process.env.NOTION_DB_VALUES    || "",
});