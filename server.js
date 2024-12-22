const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS-inställningar
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Koppla till SQLite-databasen
const db = new sqlite3.Database('./gik339-labb2.db', (err) => {
  if (err) {
    console.error('Kunde inte ansluta till databasen:', err.message);
  } else {
    console.log('Ansluten till SQLite-databasen.');
  }
});

// Route: Hämta alla användare
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'Något gick fel vid hämtning av data' });
      console.error(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Starta servern
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
