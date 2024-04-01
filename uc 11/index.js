const mysql = require('mysql');

const databaseName = 'registration';
const tableName = 'users';

const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'kali@123',
    database: databaseName,
    waitForConnecction: true,
    connectionLimit: 10,
    queueLimit: 0
});



// create database
function createDatabase(data) {
    db_connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName} `, function(err, results) {
        if (err) throw err;
        console.log("Database Created");
    });
}
// drop database
function dropDatabase() {
    db_connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, function(err, results) {
        if (err) throw err;
        console.log("Database Dropped");
    });
}

// create table
function createTable() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )`
    db_connection.query(createTableQuery, function(err, results) {
            if (err) throw err;
            console.log('Table Created successfully');
    });
}

// remove table
function removeTable() {
    db_connection(`DROP TABLE IF EXISTS ${tableName}`, function(err,results) {
        if (err) throw err;
        console.log('Table removed successfully');
    });
}

// insert 
function insert(name, email,password) {
    const insertQuery = `INSERT INTO ${tableName}(name, email, password) VALUES ('?', '?', '?')`;
    db_connection.query(insertQuery, [name,email,password], function(err, results) {
        if (err) throw err;
        console.log('Record inserted successfully');
    });
}

//get
function get() {
    const getQuery = `SELECT * FROM ${tableName}`;
    db_connection.query(getQuery, function(err, results) {
        if (err) throw err;
        console.log('Users:', results);
    });
}

// update user
function update(id, name, email, password) {
    const updateQuery = `UPDATE ${tableName}SET name =?, email =?, password =? WHERE id =?`;
    db_connection.query(updateQuery, [name, email, password, id], function(err, results) {
        if (err) throw err;
        console.log('Record updated successfully');
    });
}

// delate
function delate(id) {
    const deleteQuery = `DELETE FROM ${tableName} WHERE id =?`;
    db_connection.query(deleteQuery, [id], function(err, results) {
        if (err) throw err;
        console.log('Record deleted successfully');
    });
}

// createDatabase()
// dropDatabase()
insert('kaliyappan', 'yappank17@gmail.com', 'Kali@123')
// createTable()