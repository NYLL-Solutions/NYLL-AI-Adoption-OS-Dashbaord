import 'dotenv/config'; // DOIT rester le premier import
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './api/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// mount the API handler from ./api/data.js
app.post('/api/data', (req, res) => handler(req, res));
app.options('/api/data', (req, res) => handler(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}/index.html`));
