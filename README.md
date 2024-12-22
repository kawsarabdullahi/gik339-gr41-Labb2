# gik339-gr41-Labb2
Labb 2 för kurs GIK339: Backend och Frontend-applikation med Node.js, Express och SQLite.


# Terminalens loggar och relevanta steg

## 1. Skapande av projekt och installation av nödvändiga moduler
```bash
# Kontrollera Node.js- och npm-versioner
node -v
# Version 22.12.0 verifierades.

npm -v
# Version 9.0.0 verifierades.

# Skapa projektmapp och initiera npm
mkdir labb2
cd labb2
npm init -y

# Installera nödvändiga moduler
npm install express sqlite3 --save

# Skapa en SQLite-databas och definiera en tabell
sqlite3 gik339-labb2.db
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    username TEXT NOT NULL,
    color TEXT NOT NULL
);
# Lägg till användare med SQL-kommandon
INSERT INTO users (firstName, lastName, username, color) VALUES
('Kawsar', 'Abdullahi', 'h23kawsar', 'blue'),
('Qaali', 'Mohamed', 'h22qaali', 'red'),
('Ali', 'Mohamed', 'h23ali', 'green'),
('Sara', 'Lind', 'h22sara', 'blue'),
('Omar', 'Yusuf', 'h23omar', 'red'),
('Hassan', 'Ali', 'h22hassan', 'green'),
('Fatima', 'Hussein', 'h23fatima', 'yellow'),
('Aisha', 'Mohamed', 'h22aisha', 'red'),
('Musa', 'Khan', 'h23musa', 'blue'),
('Linda', 'Nilsson', 'h22linda', 'green');
# Kontrollera att användarna sparats korrekt i databasen
SELECT * FROM users;
# Starta servern
node server.js
# Kontrollera JSON-data från backend genom att navigera till:
http://localhost:3000/users
# Lösning: Installera om modulen
npm install sqlite3 --save
# Lösning: Använd korrekt SQL-syntax
UPDATE users SET color = 'yellow' WHERE username = 'h23fatima';
