require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/differentiate', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const apiKey = process.env.MINIMAX_API_KEY;

    if (!apiKey || apiKey === 'your_api_key_here') {
        return res.status(500).json({ error: 'API key not configured. Please add your MiniMax API key to the .env file.' });
    }

    try {
        const response = await fetch('https://api.minimax.chat/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'MiniMax-M2.7',
                max_tokens: 4000,
                messages: [
                    {
                        role: 'system',
                        content: `You are an educational tool that differentiates reading texts into three levels while preserving cultural context. You will receive a text and need to output three versions:

1. **Scaffolded (Easy)**: Simplified vocabulary and sentence structure for English learners. Keep cultural references intact but use simpler words.
2. **Standard**: The original text with minor clarifications if needed.
3. **Advanced**: More sophisticated vocabulary and complex sentence structures while preserving the original meaning and cultural context.

Output format - return ONLY valid JSON with this structure:
{
  "scaffolded": "the scaffolded version text",
  "standard": "the standard version text",
  "advanced": "the advanced version text"
}

Do not include any other text, explanations, or markdown formatting. Only return the JSON object.`
                    },
                    {
                        role: 'user',
                        content: text
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('MiniMax API error:', errorData);
            return res.status(response.status).json({ error: errorData.error?.message || 'API request failed' });
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;

        if (!content) {
            return res.status(500).json({ error: 'No content received from API' });
        }

        // Parse the JSON response
        let result;
        try {
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                result = JSON.parse(jsonMatch[0]);
            } else {
                result = JSON.parse(content);
            }
        } catch (parseError) {
            console.error('JSON parse error:', parseError, 'Content:', content);
            return res.status(500).json({ error: 'Failed to parse API response' });
        }

        res.json(result);

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
