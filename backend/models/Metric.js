// models/Metric.js
const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
    country: { type: String, required: true },
    operator: { type: String, required: true },
    successRate: { type: Number, required: true },
});

module.exports = mongoose.model('Metric', metricSchema);
