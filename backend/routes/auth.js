// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();

// Login route - issue a JWT token
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {  // Dummy credentials for demonstration
        const token = jwt.sign({ username }, config.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

module.exports = router;
