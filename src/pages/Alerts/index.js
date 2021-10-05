import React from 'react';

import ActiveAlert from '../../components/Alerts/ActiveAlert';
import InactiveAlert from '../../components/Alerts/InactiveAlert';
import './style.css'

const Alerts = () => {
    return (
        <div>
            <h1 className="alert-container-title">Lista de alertas</h1>
            <div className="alert-list">
                <ActiveAlert />
                <div className="alert-separator" />
                <h1 className="alert-history-title" >Histórico de Alertas</h1>
                <InactiveAlert />
            </div>
        </div>
    );
}

export default Alerts;