// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import CountryOperator from './components/CountryOperator';
import Metrics from './components/Metrics';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/country-operator" element={<CountryOperator />} />
                    <Route path="/metrics" element={<Metrics />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
