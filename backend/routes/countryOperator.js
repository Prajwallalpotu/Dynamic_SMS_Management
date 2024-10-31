// routes/countryOperator.js
const express = require('express');
const CountryOperator = require('../models/CountryOperator');
const router = express.Router();

// Get all country-operator pairs
router.get('/', async (req, res) => {
    const operators = await CountryOperator.find();
    res.json(operators);
});

// Add a new country-operator pair
router.post('/', async (req, res) => {
    const operator = new CountryOperator(req.body);
    await operator.save();
    res.json({ message: "Country-Operator pair added" });
});

// Update a country-operator pair
router.put('/:id', async (req, res) => {
    await CountryOperator.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Country-Operator pair updated" });
});

// Delete a country-operator pair
router.delete('/:id', async (req, res) => {
    await CountryOperator.findByIdAndDelete(req.params.id);
    res.json({ message: "Country-Operator pair deleted" });
});

module.exports = router;
