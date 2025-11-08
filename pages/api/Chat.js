import axios from 'axios'

// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'ready' })
  }

  try {
    const { message } = req.body || {}

    // DEMO: simple echo response
    const reply = message ? `You said: ${message}` : 'Hi — send a message.'

    // If you want OpenAI integration, replace above with server-side call to OpenAI using process.env.OPENAI_API_KEY
    return res.status(200).json({ reply })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
}
