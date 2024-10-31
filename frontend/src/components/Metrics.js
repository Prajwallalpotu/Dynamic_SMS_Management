// src/components/Metrics.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function Metrics() {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        const fetchMetrics = async () => {
            const { data } = await axios.get('/metrics');
            setMetrics(data);
        };
        fetchMetrics();
    }, []);

    return (
        <div>
            <h2>SMS Metrics</h2>
            <ul>
                {metrics.map(metric => (
                    <li key={metric._id}>{metric.country} - {metric.operator} : {metric.successRate}% success rate</li>
                ))}
            </ul>
        </div>
    );
}

export default Metrics;
