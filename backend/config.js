// config.js
require('dotenv').config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://prajwallalpotu:Prajwal%40123@cluster0.gejbw.mongodb.net/',
    JWT_SECRET: process.env.JWT_SECRET || 'your_fallback_secret',
    PORT: process.env.PORT || 8000,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    RATE_LIMIT: {
        SMS_PER_MINUTE_PER_COUNTRY: 10
    },
    ALERT_THRESHOLDS: {
        SUCCESS_RATE_CRITICAL: 30, // Below 30% is critical
        SUCCESS_RATE_WARNING: 50   // Below 50% is a warning
    }
};