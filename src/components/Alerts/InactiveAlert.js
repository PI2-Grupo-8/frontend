import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
 
import './style.css'

const InactiveAlert = () => (
    <div className="alert-card alert-inactive-card">
        <div className="alert-card-content">
            <h2>
                <AiFillWarning size={30} color="black" /> Pouco Fertilizante
            </h2>
            <h5>Período: 06/08/21 16:53 até 07/08/21 08:35</h5>
        </div>
    </div>
)

export default InactiveAlert;