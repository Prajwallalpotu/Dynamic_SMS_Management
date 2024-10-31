// src/components/CountryOperator.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function CountryOperator() {
    const [operators, setOperators] = useState([]);
    const [newOperator, setNewOperator] = useState({ country: '', operator: '' });

    const fetchOperators = async () => {
        const { data } = await axios.get('/country_operator');
        setOperators(data);
    };

    const addOperator = async (e) => {
        e.preventDefault();
        await axios.post('/country_operator', newOperator);
        fetchOperators();
    };

    useEffect(() => {
        fetchOperators();
    }, []);

    return (
        <div>
            <h2>Country-Operator Management</h2>
            <form onSubmit={addOperator}>
                <input type="text" placeholder="Country" value={newOperator.country} onChange={(e) => setNewOperator({ ...newOperator, country: e.target.value })} />
                <input type="text" placeholder="Operator" value={newOperator.operator} onChange={(e) => setNewOperator({ ...newOperator, operator: e.target.value })} />
                <button type="submit">Add Operator</button>
            </form>
            <ul>
                {operators.map(op => (
                    <li key={op._id}>{op.country} - {op.operator}</li>
                ))}
            </ul>
        </div>
    );
}

export default CountryOperator;
