import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import moment from 'moment'

import './style.css'
import { alertTypes } from '../../utils/alertTypes';

const ActiveAlert = ({ onClick, alert }) => {
    moment.locale('pt-br');
    return (
        <div className="alert-card alert-active-card">
            <div className="alert-card-content">
                <h2>
                    <AiFillWarning size={30} color="#F2C078" /> {alertTypes[alert.type]}
                </h2>
                <h5>{moment(alert.createdAt).fromNow()}</h5>
            </div>
            <div className="finish-alert-button" onClick={onClick ? onClick : () => { }}>
                <h3>Finalizar<br />alerta</h3>
            </div>
        </div >
    )
};

export default ActiveAlert;