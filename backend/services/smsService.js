// services/smsManagementService.js
const { exec } = require('child_process');
const TelegramAlertService = require('./telegramAlertService');
const Metric = require('../models/Metric');
const CountryOperator = require('../models/CountryOperator');

class SMSManagementService {
    static async startSession(countryOperator) {
        try {
            const sessionName = `sms_${countryOperator.country}_${countryOperator.operator}`;
            
            // Start screen session
            exec(`screen -S ${sessionName} -d -m node smsProgram.js`, async (error) => {
                if (error) {
                    await TelegramAlertService.sendCriticalAlert(
                        `Failed to start session for ${countryOperator.country} - ${countryOperator.operator}`
                    );
                }
            });

            return sessionName;
        } catch (error) {
            console.error('Session Start Error:', error);
        }
    }

    static async monitorPerformance(countryOperator) {
        const metrics = await Metric.findOne({ 
            country: countryOperator.country, 
            operator: countryOperator.operator 
        });

        if (metrics && metrics.successRate < 30) {
            await TelegramAlertService.sendCriticalAlert(
                `Low Success Rate Alert: ${countryOperator.country} - ${countryOperator.operator} at ${metrics.successRate}%`
            );
        }
    }
}

module.exports = SMSManagementService;