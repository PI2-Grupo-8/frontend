import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

import './style.css'

const ActiveAlert = () => (
    <div className="alert-card alert-active-card">
        <div className="alert-card-content">
            <h2>
                <AiFillWarning size={30} color="#F2C078" /> Veiculo Preso
            </h2>
            <h5>há 10 minutos</h5>
        </div>
        <div className="finish-alert-button">
            <h3>Finalizar<br />alerta</h3>
        </div>
    </div>
)

export default ActiveAlert;