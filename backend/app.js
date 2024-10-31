// app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authRoutes = require('./routes/auth');
const countryOperatorRoutes = require('./routes/countryOperator');
const metricsRoutes = require('./routes/metrics');

const app = express();
app.use(express.json());

// Database connection
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/auth', authRoutes);
app.use('/country_operator', countryOperatorRoutes);
app.use('/metrics', metricsRoutes);

// Start the server
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
