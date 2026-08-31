# NYLL-AI-Adoption-OS-Dashbaord
Dashboard of the NYLL AI Adoption OS

## Run locally (quick)

Requirements: Node.js 18+ (for global fetch) and npm.

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` at the project root with your Notion token (optional):

```
NOTION_TOKEN=your_token_here
PORT=3000
```

3. Start the server:

```bash
npm start
```

4. Open http://localhost:3000/index.html in your browser.

Notes:
- The EN/FR toggle is available in the header — translations are in `translations.js`.
- If you don't set `NOTION_TOKEN`, calls to the Notion API will fail; you can stub `/api/data` in `server.mjs` for local testing if needed.
