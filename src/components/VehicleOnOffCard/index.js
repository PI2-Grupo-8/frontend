import React, { useEffect, useState } from 'react';
import { BsPower } from "react-icons/bs";
import Card from '@mui/material/Card';
import IconButton from "@material-ui/core/IconButton";
import { startWork, finishWork, getWorkingVehicle } from '../../services/axios/vehicleService';
import { useAlertContext } from '../../contexts/alertsContext';
import { BsFillCircleFill } from "react-icons/bs";
import {green, red } from '../../constants/colors'
import './style.css'

const VehicleOnOffCard = ({ vehicle }) => {
  const [working, setWorking] = useState(false)
  const { showErrorAlert } = useAlertContext()

  useEffect(() => {
    const getWorkData = async () => {
      const request = await getWorkingVehicle(vehicle?._id)
      if (request.success) {
        setWorking(request.data.length > 0)
        return
      }
      showErrorAlert('Ocorreu um erro ao buscar status do veículo')
    }
    getWorkData()
  }, [vehicle])

  const turnOnOff = async () => {
    const request = working ? await finishWork(vehicle?._id) : await startWork(vehicle?._id)

    if (request.success) {
      setWorking(request.data.finishedAt === null);
      return
    }
    showErrorAlert('Ocorreu um erro ao atualizar status do veículo')
  }

  return (
    <Card className="card-container">
      <div className="description">
        <BsFillCircleFill color={working ? green : red} />
        <div className="description-content">
          <h1>{vehicle?.name}</h1>
          <h3>{vehicle?.description}</h3>
        </div>
      </div>
      <IconButton onClick={turnOnOff}>
        <BsPower  className="on-off-icon" />
      </IconButton>
    </Card>
)
}

export default VehicleOnOffCard;