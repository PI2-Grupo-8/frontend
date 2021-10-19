import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import moment from 'moment'

import './style.css'
import { alertTypes } from '../../utils/alertTypes';

const InactiveAlert = ({ alert }) => {
    moment.locale('pt-br');
    return (
        <div className="alert-card alert-inactive-card">
            <div className="alert-card-content">
                <h2>
                    <AiFillWarning size={30} color="black" /> {alertTypes[alert.type]}
                </h2>
                <h5>{`Período: ${moment(alert.createdAt).format("DD/MM/YY H:mm")} até ${moment(alert.finishedAt).format("DD/MM/YY H:mm")}`}</h5>
            </div>
        </div>
    )}

export default InactiveAlert;