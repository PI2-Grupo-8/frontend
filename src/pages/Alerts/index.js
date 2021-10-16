import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useAlertContext } from '../../contexts/alertsContext';
import { getAlerts } from '../../services/axios/sensorsDataService';
import ActiveAlert from '../../components/Alerts/ActiveAlert';
import InactiveAlert from '../../components/Alerts/InactiveAlert';
import './style.css'

const Alerts = () => {
    const [alerts, setAlerts] = useState({});
    const { showErrorAlert } = useAlertContext()

    const getAllAlerts = async () => {
        const req = await getAlerts();
        if (req.success) {
            console.log(req.data)
            setAlerts(req.data);
        } else {
            showErrorAlert('Ocorreu um erro ao buscar alertas')
        }
    }

    useEffect(() => {
        getAllAlerts();
    }, []);

    return (
        <div>
            {window.screen.width < 800 ?
                <>
                    <h1 className="alert-container-title">Lista de alertas</h1>
                    <div className="alert-list">
                        {
                            alerts?.opened?.map(alert => <ActiveAlert alert={alert} key={alert._id} />)
                        }
                        <div className="alert-separator" />
                        <h1 className="alert-history-title" >Histórico de Alertas</h1>
                        {
                            alerts?.closed?.map(alert => <InactiveAlert alert={alert} key={alert._id} />)
                        }
                    </div>
                </>
                : <Redirect
                    to={{ pathname: '/' }}
                />
            }
        </div>
    );
}

export default Alerts;