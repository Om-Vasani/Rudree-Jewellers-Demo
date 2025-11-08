import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { messages } = req.body
    if (!messages) return res.status(400).json({ error: 'No messages provided' })

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.7,
        max_tokens: 800
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    )

    const reply = response.data.choices?.[0]?.message?.content ?? 'No reply'
    res.status(200).json({ reply })
  } catch (error) {
    console.error(error?.response?.data || error.message)
    res.status(500).json({ error: 'OpenAI request failed' })
  }
}
