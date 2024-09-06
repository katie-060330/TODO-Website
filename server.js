// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for frontend-backend communication
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

const db = new sqlite3.Database('mydatabase.db');

// Ensure the database and table are set up
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT, email TEXT, password TEXT, list TEXT)");
});

// API endpoint to get users by email
app.get('/api/users/:email', (req, res) => {
  const email = req.params.email;
  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});

// API endpoint to add a new user
app.post('/api/users', (req, res) => {
  const { id, name, email, password, list } = req.body;
  const stmt = db.prepare("INSERT INTO users (id, name, email, password, list) VALUES (?, ?, ?, ?, ?)");
  stmt.run(id, name, email, password, list, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User added successfully', lastID: this.lastID });
  });
  stmt.finalize();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
