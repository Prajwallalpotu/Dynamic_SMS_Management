// services/smsService.js
const { exec } = require('child_process');

class SMSService {
    static startSession(sessionName) {
        exec(`screen -S ${sessionName} -d -m node yourScript.js`);
    }

    static stopSession(sessionName) {
        exec(`screen -S ${sessionName} -X quit`);
    }

    static restartSession(sessionName) {
        this.stopSession(sessionName);
        this.startSession(sessionName);
    }
}

module.exports = SMSService;
