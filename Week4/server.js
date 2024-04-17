const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/about', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })

app.listen(3000, () => console.log('Server ready'))