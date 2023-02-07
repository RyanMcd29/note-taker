const store = require('../db/store');
const app = require('./htmlroutes');

app.get('/notes', (req, res) => {
    store.getAllNotes().then((notes) => res.json(notes))
})

module.exports = app