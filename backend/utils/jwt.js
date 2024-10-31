const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class JWTService {
    constructor(secretKey) {
        this.secretKey = secretKey || crypto.randomBytes(64).toString('hex');
    }

    // Generate a token with optional expiry
    generateToken(payload, expiresIn = '1h') {
        return jwt.sign(payload, this.secretKey, { expiresIn });
    }

    // Verify token
    verifyToken(token) {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            return null;
        }
    }

    // Middleware for protected routes
    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).json({ error: 'Access token required' });

        const decoded = this.verifyToken(token);
        if (!decoded) return res.status(403).json({ error: 'Invalid or expired token' });

        req.user = decoded;
        next();
    }
}

module.exports = new JWTService(process.env.JWT_SECRET);