const express = require('express');
const html = require('./routes/htmlroutes')
const api = require('./routes/apiroutes')
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/', html)
app.use('/api', api)
// apiRoutes.js example
// const store = require('./db/store');

// app.get('/notes', (req, res) => {
//     store.getAllNotes().then((notes) => res.json(notes))
// })

app.listen(PORT, () =>
    console.log(`App now live at, http://localhost:${PORT}`)
);

