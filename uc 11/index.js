// require('mysql');
const mysqlFunctions = require('./crud');

// const [createdb] = process.argv;



// const instance = mysqlFunctions("kaliya","users"); 


// instance.createdb();
// instance.dropdb('ani');
// instance.createtable();
// instance.droptable();
// instance.insert('kali' ,'','ani123');
// instance.delate(3);
// instance.get();
// instance.update();




// index.js



// Extract command-line arguments
const [, , command, ...args] = process.argv;

// Create an instance of CRUD functions
const instance = mysqlFunctions("kaliya", "users");

// Define a function to execute commands based on command-line arguments
function executeCommand(command, args) {
    switch (command) {
        case 'createdb':
            instance.createdb();
            break;
        case 'dropdb':
            instance.dropdb(...args);
            break;
        case 'createtable':
            instance.createtable();
            break;
        case 'droptable':
            instance.droptable();
            break;
        case 'insert':
            instance.insert(...args);
            break;
        case 'delete':
            instance.delate(...args);
            break;
        case 'get':
            instance.get();
            break;
        case 'update':
            instance.update(...args);
            break;
        case 'delate':
            instance.delate(...args);
            break;
        default:
            console.log('Invalid command. Available commands: createdb, dropdb, createtable, droptable, insert, delete, get, update');
    }
}

// Execute the command
executeCommand(command, args);
