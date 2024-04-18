const express = require('express')
const app = express();
const fs = require('fs');
const PORT = 3000;
const cors = require('cors');

app.use(express.json()); 
app.use(cors());
app.use(express.static('public'))
app.get('/about', (req, res) => res.send('Hello World!'))

app.post('/nytimes', async (req, res) => {
    const input = req.body.input;
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${input}&api-key=Kvl02EpbnJeqzU6UpEiqXyBhnJvuQeGv`;

    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        const filePath = `./data/${input}-stories.json`;

        fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ message: 'Failed to save data' });
            }

            res.send({ message: 'Data saved successfully', path: filePath });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});