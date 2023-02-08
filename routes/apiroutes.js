// const store = require('../db/store');
const { randomUUID } = require('crypto');
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

api.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`)
    console.log(req.body);
    // Destructuring assignment
    const { title, text } = req.body;
    // variable for the object to save
    if (title && text) {
        const newNote = {
            title,
            text,
            noteID : randomUUID(),
        };

    // Obtain existing notes database
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
            // import new notes into old notes
            const oldNotes = JSON.parse(data)
            oldNotes.push(newNote)

            // write file
            fs.writeFile('../db/db.json', JSON.stringify(oldNotes), (err) => 
                err
                    ? console.error(err)
                    : console.info('Successfully updated stored notes')
                )
        }
    });
        const response = {
        status: 'success',
        body: newNote
    };

    console.log(response);
            res.status(201).json(response)
    } else {
        res.status(500).json('error in posting note')
    }
});

module.exports = api