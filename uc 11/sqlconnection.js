const expresss = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
    user: 'root',
    password: 'kali@123'
});

const databaseName = 'registration';
const tableName = 'users';

// connect to mysql server
// Connect to MySQL

connection.connect(function(err) {
	if (err) {
	  console.error('Error connecting to MySQL: ' );
	  return;
	}
	console.log('Connected to MySQL');
  
	// SQL query to create a database
	const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
  
	// Execute the query to create the database
	connection.query(createDatabaseQuery, function(err, results, fields) {
	  if (err) {
		console.error('Error creating database: ' + err.stack);
		return;
	  }
	  console.log('Database created successfully');
  
	  // Switch to the created database
	  connection.changeUser({ database: `${databaseName}` }, function(err) {
		if (err) {
		  console.error('Error switching database: ' + err.stack);
		  return;
		}
		console.log(`Switched to database: ${databaseName}`);
  
		// SQL query to create a table
		const createTableQuery = `
			CREATE TABLE IF NOT EXISTS ${tableName} (
				id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
			)
		`
		// Execute the query to create the table
		connection.query(createTableQuery, function(err, results, fields) {
		  if (err) {
			console.error('Error creating table: ' );
			return;
		  }
		  console.log('Table created successfully');
  
		  // Disconnect from MySQL
		  connection.end(function(err) {
			if (err) {
			  console.error('Error disconnecting from MySQL: ');
			  return;
			}
			console.log('Disconnected from MySQL');
		  });
		});
	  });
	});
  });



module.exports = {
	connection,
	databaseName,
	tableName
}