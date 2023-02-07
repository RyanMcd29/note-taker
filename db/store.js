const util = require('util');
const fs = require('fs')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

class Store {
    read() {
        return readFile('db/db.json', 'utf-8')
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
    }

    getAllNotes() {

    }

    addANote(note) {

    }
    
    deleteNote(id) {

    }
}

module.exports = new Store();