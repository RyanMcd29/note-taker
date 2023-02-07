const express = require('express');
const api = require('./public/assets/routes/router.js');
const path = require('path')
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', api)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App now live at, http://localhost:${PORT}`)
);

