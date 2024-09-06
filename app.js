// app.js
const db = require('./database.js');

// Add a new user
db.addUser(2, 'Bob', 'bob@example.com', 'B456', ['Get Laundry', 'feed cats'], (err, lastID) => {
  if (err) {
    console.error('Error adding user:', err.message);
    return;
  }
  console.log('User added with ID:', lastID);

  // Retrieve users to verify
  db.getUsers((err, rows) => {
    if (err) {
      console.error('Error retrieving users:', err.message);
      return;
    }
    console.log('Users:', rows);

    // Close the database connection
    db.closeDb();
  });
});
