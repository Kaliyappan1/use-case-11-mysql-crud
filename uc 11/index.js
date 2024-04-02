require('mysql');
const mysqlFunctions = require('./crud');


mysqlFunctions.createdatabasename("ani")
mysqlFunctions.createDatabase()
// mysqlFunctions.dropDatabase()
mysqlFunctions.createtablename("notes")
mysqlFunctions.createtable()
// mysqlFunctions.removetable()
// mysqlFunctions.insert("kaliyappan","yappank17@gmail.com", "12345456")
mysqlFunctions.get()
// mysqlFunctions.update()
// mysqlFunctions.delate()