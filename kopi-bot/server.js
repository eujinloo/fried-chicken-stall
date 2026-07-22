import { createServer } from 'node:http';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { GoogleGenAI } from '@google/genai';

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const PORT = process.env.PORT || 3939;
const MODEL = 'gemini-2.5-flash-lite';

function loadEnvFile() {
	const path = join(ROOT, '.env');
	if (!existsSync(path)) return;
	for (const line of readFileSync(path, 'utf8').split('\n')) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const idx = trimmed.indexOf('=');
		if (idx === -1) continue;
		const key = trimmed.slice(0, idx).trim();
		const value = trimmed.slice(idx + 1).trim();
		if (key && !(key in process.env)) process.env[key] = value;
	}
}
loadEnvFile();

function loadDocs() {
	if (!existsSync(DOCS_DIR)) return '(docs folder is empty)';
	const files = readdirSync(DOCS_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.txt'));
	if (files.length === 0) return '(docs folder is empty)';
	return files
		.map((f) => `--- ${f} ---\n${readFileSync(join(DOCS_DIR, f), 'utf8')}`)
		.join('\n\n');
}

const SYSTEM_PROMPT = `You are the Kopi Corner website chatbot.
Answer only using the DOCS below (menu, hours, location).
If the docs don't cover the visitor's question, say so plainly — do not guess.
Never invent a price or a time that isn't written in the docs.
Never ask the visitor for personal details.

DOCS:
`;

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

function send(res, status, body, contentType = 'application/json') {
	res.writeHead(status, { 'Content-Type': contentType });
	res.end(contentType === 'application/json' ? JSON.stringify(body) : body);
}

const server = createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		send(res, 200, readFileSync(join(ROOT, 'public', 'index.html'), 'utf8'), 'text/html');
		return;
	}

	if (req.method === 'POST' && req.url === '/api/chat') {
		let body = '';
		req.on('data', (chunk) => (body += chunk));
		req.on('end', async () => {
			let message;
			try {
				({ message } = JSON.parse(body || '{}'));
			} catch {
				send(res, 400, { error: 'Invalid request body' });
				return;
			}
			if (!message || typeof message !== 'string') {
				send(res, 400, { error: 'Missing message' });
				return;
			}
			if (!ai) {
				send(res, 200, {
					reply: "The Gemini API key isn't set yet. Add it to kopi-bot/.env (GEMINI_API_KEY=...) and restart the server."
				});
				return;
			}
			try {
				const response = await ai.models.generateContent({
					model: MODEL,
					contents: message,
					config: { systemInstruction: SYSTEM_PROMPT + loadDocs() }
				});
				send(res, 200, { reply: response.text });
			} catch (err) {
				console.error(err);
				send(res, 500, { error: 'Something went wrong talking to Gemini.' });
			}
		});
		return;
	}

	send(res, 404, 'Not found', 'text/plain');
});

server.listen(PORT, () => {
	console.log(`Kopi Corner chatbot running at http://localhost:${PORT}`);
});
