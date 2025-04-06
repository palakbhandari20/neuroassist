import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import geminiRoute from './routes/gemini.js'; // ✅ Import the route

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// ✅ Mount Gemini route here
app.use('/api/gemini', geminiRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dyslexia.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
