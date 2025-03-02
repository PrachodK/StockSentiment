require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = '';

const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 1,
    ssl: { rejectUnauthorized: false }
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        db.query('INSERT INTO users (username, password_hash) VALUES (?, ?)',
            [username, hash], (err, result) => {
                if (err) return res.status(400).json({ error: 'Username already exists' });
                res.json({ message: 'User registered successfully' });
        });
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ error: 'User not found' });

        bcrypt.compare(password, results[0].password_hash, (err, match) => {
            if (err || !match) return res.status(401).json({ error: 'Invalid credentials' });

            const token = jwt.sign({ userId: results[0].id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        });
    });
});

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });
        req.userId = decoded.userId;
        next();
    });
};

app.get('/api/stocks', (req, res) => {
    db.query('SELECT * FROM stocks', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

app.post('/api/favorite', verifyToken, (req, res) => {
    const { stockId } = req.body;
    db.query('INSERT INTO favorites (user_id, stock_id) VALUES (?, ?)',
        [req.userId, stockId], (err, result) => {
            if (err) return res.status(500).json({ error: 'Error adding favorite' });
            res.json({ message: 'Stock favorited' });
    });
});

app.get('/api/favorites', verifyToken, (req, res) => {
    db.query(
        `SELECT stocks.* FROM favorites 
         JOIN stocks ON favorites.stock_id = stocks.id 
         WHERE favorites.user_id = ?`,
        [req.userId], (err, results) => {
            if (err) return res.status(500).json({ error: 'Error fetching favorites' });
            res.json(results);
    });
});

app.delete('/api/favorite', verifyToken, (req, res) => {
    const { stockId } = req.body;
    db.query('DELETE FROM favorites WHERE user_id = ? AND stock_id = ?',
        [req.userId, stockId], (err, result) => {
            if (err) return res.status(500).json({ error: 'Error removing favorite' });
            res.json({ message: 'Favorite removed' });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
