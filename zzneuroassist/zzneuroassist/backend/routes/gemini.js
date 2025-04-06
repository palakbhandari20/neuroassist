import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

router.post('/', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
    res.json({ response: reply });

  } catch (err) {
    console.error('Gemini API Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
