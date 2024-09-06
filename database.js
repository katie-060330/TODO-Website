// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

// Ensure the operations are done in order
db.serialize(() => {
    // Drop the table if it exists
    db.run("DROP TABLE IF EXISTS users");
  
    // Create the table with columns: id, name, email, password, and list
    db.run("CREATE TABLE users (id INT, name TEXT, email TEXT, password TEXT, list TEXT)");
  });
  

// Function to add a user to the database
function addUser(id, name, email, password, list, callback) {
  const stmt = db.prepare("INSERT INTO users (id, name, email, password, list) VALUES (?, ?, ?, ?, ?)");
  stmt.run(id, name, email, password, list, function(err) {
    if (err) {
      return callback(err);
    }
    callback(null, this.lastID); // Return the ID of the inserted row
  });
  stmt.finalize(); // Ensure resources are freed
}

// Function to retrieve users from the database
function getUsers(callback) {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows); // Return the rows
  });
}

// Function to close the database connection
function closeDb() {
  db.close();
}

module.exports = { addUser, getUsers, closeDb };
