const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res, retries= 3, delay=1000) => {
    try {
        const userRequestPrompt = req.body.prompt;
        console.log("VIBES " + userRequestPrompt);
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "user", content: userRequestPrompt },
            ],
        }, {
            headers: {
                'Authorization': `Bearer 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`, // OPENAI API KEY: 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
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
       // console.error('Error calling OpenAI API:', error);
        console.log(error.message)
        res.status(500).send(error.message);
    }
});

const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));