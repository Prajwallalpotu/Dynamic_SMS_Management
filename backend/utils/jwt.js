// utils/jwt.js
const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        req.user = jwt.verify(token, config.JWT_SECRET_KEY);
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports = { verifyToken };
