import React, { useEffect, useState } from 'react';
import { BsGear, BsVolumeUp } from "react-icons/bs";
import { FiRefreshCcw } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { IconButton, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

import moment from 'moment'

import './style.css'
import Battery from '../../components/Battery';
import Fertilizer from '../../components/Fertilizer';


import VehicleOnOffCard from '../../components/VehicleOnOffCard';
import VehicleHeaderInfo from '../../components/VehicleHeaderInfo';
import VehicleCharts from '../../components/VehicleCharts';

import { getVehicleByID, sendCommand } from '../../services/axios/vehicleService';
import { useAlertContext } from '../../contexts/alertsContext';
import { getAlertsByVehicle, getVehiclesData, getGraph } from '../../services/axios/sensorsDataService';
import { sensorsData } from '../../constants/sensorsData';
import { comands } from '../../constants/commands';
import VehicleAlertList from '../../components/VehicleAlertList';

const ControlPanel = () => {
  moment.locale("pt-br");

  const [vehicle, setVehicle] = useState(null)
  const [alerts, setAlerts] = useState([])
  const [alertHistory, setAlertHistory] = useState([])
  const [lastUpdate, setLastUpdate] = useState(null)
  const [battery, setBattery] = useState(null)
  const [fertilizer, setFertilizer] = useState(null)
  const [distance, setDistance] = useState(0)
  const [fertilizerGraph, setFertilizerGraph] = useState([])
  const [batteryGraph, setBatteryGraph] = useState([])

  const { id } = useParams();
  const { showErrorAlert, showSuccessAlert } = useAlertContext()
  const history = useHistory();

  const updateAllData = async () => {
    await getVehicle();
    await getSensorsData(sensorsData.BATTERY, setBattery)
    await getSensorsData(sensorsData.FERTILIZER, setFertilizer)
    await getSensorsData(sensorsData.DISTANCE, setDistance)
    await getGraphs()

    await updateAlerts()
  }

  const updateAlerts = async () => {
    await getActiveAlerts();
    await getInactiveAlerts();
  }

  const updateDate = (newDate) => {
    if (lastUpdate === null || moment(newDate).isAfter(lastUpdate))
      setLastUpdate(newDate);
  }

  const getActiveAlerts = async () => {
    const request = await getAlertsByVehicle(id)
    if (request.success) {
      setAlerts(request.data)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar alertas')
  }

  const getInactiveAlerts = async () => {
    const request = await getAlertsByVehicle(id, 'closed')
    if (request.success) {
      setAlertHistory(request.data)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar alertas')
  }

  const getSensorsData = async (type, setData) => {
    const request = await getVehiclesData(id, type)
    if (request.success && request.data.length) {
      const dataList = request.data
      const lastData = dataList[dataList.length - 1]
      setData(lastData.value['$numberDecimal'])
      updateDate(lastData.createdAt)
      return
    }
    if (!request.success)
      showErrorAlert('Ocorreu um erro ao buscar dados do veículo');
  }

  const getVehicle = async () => {
    const request = await getVehicleByID(id)
    if (request.success) {
      setVehicle(request.data)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar veículo')
  }

  const getGraphByType = async (type, setData) => {
    const request = await getGraph(id, type)
    if (request.success) {
      setData(request.data)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar grafico')
  }
  const getGraphs = async () => {
    await getGraphByType(sensorsData.FERTILIZER, setFertilizerGraph)
    await getGraphByType(sensorsData.BATTERY, setBatteryGraph)
  }


  useEffect(() => {
    const getInfo = async () =>{
      await updateAllData();
    }
    getInfo()
  }, [])


  const showLastUpdate = () => {
    if (lastUpdate)
      return moment(lastUpdate).fromNow();

    return 'indisponível'
  }

  const LastUpdate = () => (
    <h3 className="vehicle-last-update">
      Ultima atualização: {showLastUpdate()}
      <IconButton onClick={updateAllData} >
        <FiRefreshCcw size={20} color="#5603AD"/>
      </IconButton>
    </h3>
  )

  const FertilizerInfo = () => (
    <>
      <h2>Fertilizante: {vehicle?.fertilizer}</h2>
      <h3>Quantidade de uso por planta: {vehicle?.fertilizerAmount}ml</h3>
    </>
  )

  const soundAlert = async() => {
    const request = await sendCommand(id, comands.SOUND_ALERT)
    if (request.success) {
      showSuccessAlert('Comando enviado!')
      return
    }
    showErrorAlert('Ocorreu um erro ao enviar comando')
  }


  return (
    <div className="vehicle-container">
      <div className="vehicle-info" >
        <VehicleHeaderInfo
          battery={battery}
          fertilizer={fertilizer}
          vehicleID={id}
          sendSoundAlert={soundAlert}
        />
        <VehicleOnOffCard  vehicle={vehicle}/>
        <div className="vehicle-info-container-desktop">
          <LastUpdate/>
          <div className='fuel-level'>
            <span>
              <Battery size={30} className="battery-icon" percentage={battery}/>
              <h4>Bateria: {battery}%</h4>
            </span>
            <span>
              <Fertilizer width={30} percentage={fertilizer}/>
              <h4>Fertilizante: {fertilizer}%</h4>
            </span>
          </div>
          <h2>Distância</h2>
          <h3>Ultima distância percorrida: {distance}m</h3>
          <br />
          <FertilizerInfo />
        </div>
        <div className="vehicle-info-container-mobile">
          <h3>Ultima distância percorrida: {distance}m</h3>
          <LastUpdate />
          <div className="separator" />
          <FertilizerInfo/>
        </div>
      </div>
      <div className="charts-container">
        <div className="header-desktop">
          <Button
            startIcon={<BsGear className="header-icon lateral-space" />}
            onClick={() => history.push(`/vehicle/edit/${id}`)}
          >
            <h4 className="conf-button">
              Configurações
            </h4>
          </Button>
          <Button
            startIcon={<BsVolumeUp className="header-icon" />}
            onClick={soundAlert}
          >
            <h4 className="conf-button">
              Emitir sinal sonoro
            </h4>
          </Button>
        </div>
        <VehicleCharts fertilizerGraph={fertilizerGraph} batteryGraph={batteryGraph}/>
      </div>

      <VehicleAlertList
        alerts={alerts}
        alertHistory={alertHistory}
        updateAlerts={updateAlerts}
      />
    </div>
  );
}

export default ControlPanel;