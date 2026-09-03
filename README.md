# Dashboard AI Adoption OS

Dashboard de suivi du programme AI Adoption OS de NYLL, alimenté en direct par les bases de données Notion du client.

Une seule base de code sert tous les clients. Ce qui change d'un client à l'autre tient entièrement dans les variables d'environnement : le nom du client, le token Notion et les liens des 4 bases de données. Aucun code à modifier, aucune branche à créer.

## Déployer le dashboard pour un nouveau client

À faire une fois par client. Compter 20 minutes.

### Étape 1 — Dupliquer l'espace Notion

Dupliquer le teamspace **Client Template (to be copied)** et le renommer au nom du client.

### Étape 2 — Connecter l'intégration Notion

Sur la page racine du nouveau teamspace : `•••` → **Connections** → ajouter l'intégration **NYLL AI Adoption OS Dashboard**.

Sans cette étape, l'API Notion répondra que les bases sont introuvables. Les pages enfants héritent automatiquement de la connexion.

### Étape 3 — Copier les liens des 4 bases

Ouvrir chacune des bases ci-dessous **en page pleine** (pas une vue intégrée), puis `•••` → **Copier le lien**. Garder les 4 liens de côté.

| Base Notion | Alimente l'onglet |
|---|---|
| Carte de chaleur de gaspillage & frictions | Frictions |
| Habitudes & PDCA | Habitudes |
| Tâches activées par l'IA | Tâches IA |
| Valeur des décisions & ROI | Valeur |

Attention : copier le lien d'une **vue liée** au lieu de la base elle-même donne un identifiant invalide. Le dashboard affiche un message explicite si ça arrive.

### Étape 4 — Créer le projet Vercel

Sur Vercel : **Add New** → **Project** → importer ce dépôt. Nommer le projet d'après le client, par exemple `nyll-ai-adoption-os-dashboard-nomclient`.

Avant de cliquer **Deploy**, renseigner les 6 variables d'environnement décrites à la section suivante.

### Étape 5 — Vérifier

Ouvrir l'URL du déploiement. Les 7 onglets doivent se remplir et l'en-tête doit afficher le nom du client.

Si l'en-tête est vide, `CLIENT_NAME` n'est pas définie. Si un onglet est en erreur, voir la section « En cas de problème ».

## Variables d'environnement

À définir dans Vercel : **Project** → **Settings** → **Environments** → choisir l'environnement → **Environment Variables**.

| Variable | Valeur à coller | Type |
|---|---|---|
| `CLIENT_NAME` | Nom du client affiché dans l'en-tête | Plain |
| `NOTION_TOKEN` | Secret de l'intégration Notion | **Secret** |
| `NOTION_DB_FRICTIONS` | Lien de la base Frictions | Plain |
| `NOTION_DB_HABITS` | Lien de la base Habitudes & PDCA | Plain |
| `NOTION_DB_AITASKS` | Lien de la base Tâches activées par l'IA | Plain |
| `NOTION_DB_VALUES` | Lien de la base Valeur des décisions & ROI | Plain |

Les 4 variables `NOTION_DB_*` acceptent le lien Notion complet collé tel quel. L'identifiant est extrait automatiquement, inutile de le chercher dans l'URL.

`NOTION_TOKEN` doit être créée avec le type **Secret** : elle ne sera plus lisible ensuite, seulement remplaçable. C'est voulu.

Une variable modifiée n'est lue qu'au prochain démarrage. Après tout changement : **Deployments** → dernier déploiement → `•••` → **Redeploy**.

Le fichier `notion.config.js`, à la racine, documente ces variables. Il ne contient aucune valeur client — c'est normal, il ne faut rien y écrire.

## Pointer un dashboard existant vers un autre espace Notion

1. Récupérer les 4 nouveaux liens de bases (étape 3 ci-dessus).
2. Connecter l'intégration Notion au nouvel espace (étape 2 ci-dessus).
3. Dans Vercel, remplacer les 4 variables `NOTION_DB_*` et `CLIENT_NAME`.
4. Redéployer.

Si le nouvel espace appartient à un autre workspace Notion, il faut aussi une nouvelle intégration, donc un nouveau `NOTION_TOKEN`.

## Développement local

Prérequis : Node.js 22 et npm.

```bash
npm install
```

Créer un fichier `.env` à la racine, sur le modèle de `.env.example` :

```
CLIENT_NAME=Nom du client
NOTION_TOKEN=ntn_...
NOTION_DB_FRICTIONS=https://www.notion.so/...
NOTION_DB_HABITS=https://www.notion.so/...
NOTION_DB_AITASKS=https://www.notion.so/...
NOTION_DB_VALUES=https://www.notion.so/...
PORT=3000
```

Puis :

```bash
npm start
```

Et ouvrir http://localhost:3000

`.env` ne doit jamais être commité. Il est déjà dans `.gitignore`. Un token Notion ne se colle ni dans un commit, ni dans Slack, ni dans un ticket — seulement dans `.env` et dans Vercel.

## En cas de problème

| Message affiché | Cause | Correctif |
|---|---|---|
| La base « ... » est introuvable | L'intégration n'a pas accès à la base | Notion → page racine → `•••` → Connections → ajouter l'intégration |
| Token Notion invalide ou expiré | `NOTION_TOKEN` absent, erroné ou régénéré | Remplacer la variable dans Vercel, puis redéployer |
| Ne pointe pas vers une base de données valide | Lien d'une vue liée ou d'une page, pas d'une base | Recopier le lien depuis la base ouverte en page pleine |
| La base « ... » n'est pas configurée | Variable `NOTION_DB_*` vide ou absente | L'ajouter dans Vercel, puis redéployer |
| Dashboard vide, en-tête sans nom de client | Variables non lues | Vérifier qu'un redéploiement a eu lieu après leur ajout |
| Onglet Waste-to-Value vide, les autres OK | Les relations Notion pointent hors de l'espace | Dupliquer la page parente contenant les 4 bases, pas les bases une par une |

Les noms de colonnes Notion peuvent être en anglais ou en français : le dashboard reconnaît les deux. Les correspondances sont dans `index.html` (fonction `nf` et objet `ENUM_MAP`). Une colonne renommée hors de ces listes s'affiche comme `—`.

## Structure du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Interface React et correspondances de colonnes Notion |
| `translations.js` | Textes FR / EN de l'interface |
| `notion.config.js` | Documente les variables d'environnement attendues |
| `api/data.js` | Interroge l'API Notion et normalise les réponses |
| `server.mjs` | Serveur Express pour le développement local |
| `.env.example` | Modèle de `.env`, sans valeurs |

## Contribuer

`main` est la branche déployée chez tous les clients. Un commit sur `main` part en production partout.

- Travailler sur une branche, ouvrir une Pull Request.
- Vérifier le déploiement **Preview** généré par Vercel sur la PR avant de fusionner.
- Ne jamais pousser directement sur `main`.
