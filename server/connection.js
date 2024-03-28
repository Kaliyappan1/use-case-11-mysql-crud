const mysql = require('mysql')

const pool = mysql.createPool(
    {
        connectionLimit: 10,
        host: 'localhost',
        user: "root",
        password: "kali@123",
        database: "user"
    }
)

pool.getConnection((err, connection) =>{
    if(err) {
        return console.log(err);
    }
    console.log('database connected successfully');
    connection.release();
});

module.exports = pool;
