// models/CountryOperator.js
const mongoose = require('mongoose');

const countryOperatorSchema = new mongoose.Schema({
    country: { type: String, required: true },
    operator: { type: String, required: true },
});

module.exports = mongoose.model('CountryOperator', countryOperatorSchema);
