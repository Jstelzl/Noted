const fs = require('fs');
const router = require('express').Router();
const {v4: uuidv4} = require('uuid');

// API routes || GET
router.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(data));
});
 
// API routes || POST
router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

// API routes || delete
router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const removeNote = notes.filter((deleteNote) => deleteNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(removeNote));

    res.json(removeNote)
});

module.exports = router;