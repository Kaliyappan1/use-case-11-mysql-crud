const mysql = require('mysql');
const winston = require('winston');
const {combine, timestamp, json, prettyPrint} = winston.format

const logger = winston.createLogger({
    level: 'info',
    format: combine (timestamp(),json(),prettyPrint()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'info.log' })
    ]
})



function crud(databasename, tablename) {
    
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
        if (err){
            logger.error('Error creating database:', err)
            throw err;
        }
        console.log(`"Database Created" ,${databasename}` );
        
    });
}


// drop database
function dropDatabase() {
    db_connection.query(`DROP DATABASE IF EXISTS ${databasename}`, function(err, results) {
        if (err) {
            logger.error('Error dropping database:', err);
            throw err;
        }
        console.log("Database Dropped");
    });
}

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'kali@123',
    database: databasename,
    waitForConnecction: true,
    connectionLimit: 10,
    queueLimit: 0
});


// create table
function createtable() {
    const createtableQuery = `
    CREATE TABLE IF NOT EXISTS ${tablename} (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )`
    connection.query(createtableQuery, function(err, results) {
            if (err) {
                logger.error('Error creating table:', err);
                throw err;
            }
            console.log('Table Created successfully');
            
  
    });
}

// remove table
function removetable() {
    connection.query(`DROP TABLE IF EXISTS ${tablename}`, function(err,results) {
        if (err) {
            logger.error('Error dropping table:', err);
            throw err;
        }
        console.log('Table removed successfully');

    });
}

// insert 
function insert(name, email, password) {
    const insertQuery = `INSERT INTO ${tablename}(name, email, password) VALUES (?, ?, ?)`;
    connection.query(insertQuery, [name, email, password], function(err, results) {
        if (err) {
            logger.error('Error inserting record:', err);
            throw err;
        }
        console.log('Record inserted successfully');
        return results;

    });
}

//get
function get() {
    const getQuery = `SELECT * FROM ${tablename}`;
    connection.query(getQuery, function(err, results) {
        if (err) {
            logger.error('Error getting records:', err);
            throw err;
        }
        console.log('Users:', results);
        

    });
}

// update user
function update(tablename,id, name, email, password) {
    const updateQuery = `UPDATE ${tablename}SET name =?, email =?, password =? WHERE id =?`;
    connection.query(updateQuery, [name, email, password, id], function(err, results) {
        if (err) {
            logger.error('Error updating record:', err);
            throw err;
        }
        console.log('Record updated successfully');

    });
}

// delate
function delate(id) {
    const deleteQuery = `DELETE FROM ${tablename} WHERE id =?`;
    connection.query(deleteQuery, [id], function(err, results) {
        if (err) {
            logger.error('Error deleting record:', err);
            throw err;
        }
        console.log('Record deleted successfully');
    
    // Disconnect from MySQL
connection.end(function(err) {
    if (err) {
        logger.error ('disconnect from MySQL:',err);
      console.error('Error disconnecting from MySQL: ');
      return;
    }
    console.log('Disconnected from MySQL');
  });

    });
}


return {
    createdb: () => createDatabase(),
    dropdb: () => dropDatabase(),
    createtable: () => createtable(),
    droptable: () => removetable(),
    insert: () => insert(),
    get: () => get(),
    update: () => update(),
    delate: () => delate(),
}


// module.exports = {
//     createDatabase,
//     dropDatabase,
//     createtable,
//     removetable,
//     insert,
//     get,
//     update,
//     delate
// };
};


module.exports = crud;


