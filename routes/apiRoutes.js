const fs = require('fs');
const uuid = require('uuid');
const router = require('express').Router();

// API routes
router.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(data));
})