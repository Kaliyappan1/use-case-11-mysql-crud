const mysql = require('mysql');

var databasename = '';
function createdatabasename(name) {
    databasename = name;
}

const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'kali@123',
    // database: databaseName,
    waitForConnecction: true,
    connectionLimit: 10,
    queueLimit: 0
});



// create database
function createDatabase() {
    const databaseQuery = `CREATE DATABASE IF NOT EXISTS ${databasename} `;
    db_connection.query(databaseQuery, function (err, result) {
        if (err) throw err;
        console.log(`"Database Created" ,${databasename}` );
    });
}
// drop database
function dropDatabase() {
    db_connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, function(err, results) {
        if (err) throw err;
        console.log("Database Dropped");
    });
}

var tablename = {};
function createtablename(name) {
    tablename = name;
}

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'kali@123',
    database: "ani",
    waitForConnecction: true,
    connectionLimit: 10,
    queueLimit: 0
});


// create table
function createtable() {
    const createtableQuery = `CREATE TABLE IF NOT EXISTS ${tablename} (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )`
    connection.query(createtableQuery, function(err, results) {
            if (err) throw err;
            console.log('Table Created successfully');
    });
}

// remove table
function removetable() {
    connection(`DROP TABLE IF EXISTS ${tablename}`, function(err,results) {
        if (err) throw err;
        console.log('Table removed successfully');
    });
}

// insert 
function insert(name, email,password) {
    const insertQuery = `INSERT IGNORE INTO ${tablename}(name, email, password) VALUES (?, ?, ?)`;
    connection.query(insertQuery, [name,email,password], function(err, results) {
        if (err) throw err;
        console.log('Record inserted successfully');
    });
}

//get
function get() {
    const getQuery = `SELECT * FROM ${tablename}`;
    connection.query(getQuery, function(err, results) {
        if (err) throw err;
        console.log('Users:', results);
    });
}

// update user
function update(id, name, email, password) {
    const updateQuery = `UPDATE ${tablename}SET name =?, email =?, password =? WHERE id =?`;
    connection.query(updateQuery, [name, email, password, id], function(err, results) {
        if (err) throw err;
        console.log('Record updated successfully');
    });
}

// delate
function delate(id) {
    const deleteQuery = `DELETE FROM ${tablename} WHERE id =?`;
    connection.query(deleteQuery, [id], function(err, results) {
        if (err) throw err;
        console.log('Record deleted successfully');
    });
}

module.exports = {
    db_connection,
    createtablename,
    createdatabasename,
    createDatabase,
    dropDatabase,
    createtable,
    removetable,
    insert,
    get,
    update,
    delate
};