const express = require('express');
const router =express.Router();
const db = require('./connection');

// insert data to db

router.post('/testInsert', (req,res) => {
    // get data body
    const name = req.body.name;
    const marks = Number(req.body.marks);

    // insert query
    const query = `INSERT INTO TESTTABLE (name, marks) VALUES (${db.escape(name)})`
})