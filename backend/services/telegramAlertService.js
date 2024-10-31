// services/telegramAlertService.js
const axios = require('axios');

class TelegramAlertService {
    constructor(botToken, chatId) {
        this.botToken = botToken;
        this.chatId = chatId;
        this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
    }

    async sendAlert(message) {
        try {
            const response = await axios.post(`${this.baseUrl}/sendMessage`, {
                chat_id: this.chatId,
                text: message,
                parse_mode: 'HTML'
            });
            return response.data;
        } catch (error) {
            console.error('Telegram Alert Error:', error);
            return null;
        }
    }

    // Specific alert methods
    async sendCriticalAlert(message) {
        return this.sendAlert(`🚨 CRITICAL ALERT: ${message}`);
    }

    async sendPerformanceAlert(message) {
        return this.sendAlert(`📊 PERFORMANCE ALERT: ${message}`);
    }
}

module.exports = new TelegramAlertService(
    process.env.TELEGRAM_BOT_TOKEN, 
    process.env.TELEGRAM_CHAT_ID
);