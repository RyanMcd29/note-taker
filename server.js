const express = require('express');
const html = require('./routes/htmlroutes')
const api = require('./routes/apiroutes')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api)
app.use('/', html)

// apiRoutes.js example
// const store = require('./db/store');


app.listen(PORT, () =>
    console.log(`App now live at, http://localhost:${PORT}`)
);

