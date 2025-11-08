import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).json({ message: 'Chat API Ready' })

  try {
    const { message } = req.body
    return res.status(200).json({ reply: `You said: ${message}` })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}
