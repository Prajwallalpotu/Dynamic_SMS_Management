// routes/metrics.js
const express = require('express');
const Metric = require('../models/Metric');
const router = express.Router();

// Get all metrics
router.get('/', async (req, res) => {
    const metrics = await Metric.find();
    res.json(metrics);
});

// Add a new metric entry
router.post('/', async (req, res) => {
    const metric = new Metric(req.body);
    await metric.save();
    res.json({ message: "Metric added" });
});

module.exports = router;
