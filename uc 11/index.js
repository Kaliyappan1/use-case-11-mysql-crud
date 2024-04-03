require('mysql');
const mysqlFunctions = require('./crud');




const instance = mysqlFunctions("registration","users"); 


instance.createdb();
// instance.dropdb();
instance.createtable();
// instance.droptable();
// instance.insert('kali' ,'kali@123','ani123');
// instance.delate(1);
// instance.get();
// instance.update();




