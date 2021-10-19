import React, { useEffect, useState } from 'react';
import { getAlertsByVehicle } from '../../services/axios/sensorsDataService';
import { useAlertContext } from '../../contexts/alertsContext';
import { closeAlert } from '../../services/axios/sensorsDataService';
import ActiveAlert from '../Alerts/ActiveAlert';
import InactiveAlert from '../Alerts/InactiveAlert';
import './style.css'

const VehicleAlertList = ({ alerts, alertHistory, updateAlerts }) => {
  const { showErrorAlert, showSuccessAlert } = useAlertContext()

  const closeActiveAlert = async (id) => {
    const request = await closeAlert(id)
    if (request.success) {
      showSuccessAlert('Alerta finalizado!')
      updateAlerts()
      return
    }
    showErrorAlert('Ocorreu um erro ao finalizar alerta')
  }

  return (
    <div className="border-container">
      <div className="alerts-container">
        <h2>Alertas</h2>
        {alerts.map((alert) =>
          <ActiveAlert alert={alert} onClick={() => closeActiveAlert(alert._id)} />
        )}
        {alertHistory.length > 0 ?
          <>
            <div className="separator" />
            <h2 className="history">Histórico de Alertas</h2>
          </>
          : null
        }

        {alertHistory.map((alert) =>
          <InactiveAlert alert={alert}/>
        )}
      </div>
    </div>
  )
}

export default VehicleAlertList