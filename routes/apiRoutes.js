const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid');

// API routes
router.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(data));
});

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});