// const store = require('../db/store');
const fs = require('fs')
const api = require('express').Router();

api.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
        res.json(JSON.parse(data)) 
    }
    })      
});

module.exports = api