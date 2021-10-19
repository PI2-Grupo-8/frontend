import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { purple, white, green, yellow, red } from '../../constants/colors';
import { sensorsData } from '../../constants/sensorsData';
import Battery from '../Battery';
import 'moment/locale/pt-br'
import './style.css'
import { BsFillCircleFill } from "react-icons/bs";
import { GoAlert } from "react-icons/go";
import Fertilizer from '../Fertilizer';
import { getAlertsByVehicle, getVehiclesData } from '../../services/axios/sensorsDataService';
import { useAlertContext } from '../../contexts/alertsContext';
import { getWorkingVehicle } from '../../services/axios/vehicleService';


const VehicleCard = ({ vehicle }) =>  {
  moment.locale("pt-br");
  const { showErrorAlert } = useAlertContext()
  const history = useHistory();

  const [alerts, setAlerts] = useState([])
  const [battery, setBattery] = useState(null)
  const [fertilizer, setFertilizer] = useState(null)
  const [working, setWorking] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(null)

  const getAlerts = async () => {
    const request = await getAlertsByVehicle(vehicle._id)
    if (request.success) {
      setAlerts(request.data)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar alertas')
  }

  const updateDate = (newDate) => {
    if (lastUpdate === null || moment(newDate).isAfter(lastUpdate))
      setLastUpdate(newDate);
  }

  const getSensorsData = async (type, setData) => {
    const request = await getVehiclesData(vehicle._id, type)
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

  const getWorkData = async () => {
    const request = await getWorkingVehicle(vehicle._id)
    if (request.success) {
      setWorking(request.data.length > 0)
      updateDate(request.data[0]?.createdAt)
      return
    }
    showErrorAlert('Ocorreu um erro ao buscar status do veículo')
  }

  useEffect(() => {
    getAlerts()
    getWorkData()
    getSensorsData(sensorsData.BATTERY, setBattery)
    getSensorsData(sensorsData.FERTILIZER, setFertilizer)
  }, [vehicle])

  return (
    <Card
      sx={{ width: 350, margin: 1, background: purple, color: white }}
      onClick={() => history.push(`/vehicle/${vehicle._id}`, {vehicle})}
      >
      <CardActionArea>
        <CardContent>
          <div className="card-header">
            <div className="card-title">
              <h2 className="vehicle-name">
                {vehicle.name}
              </h2>
              <BsFillCircleFill color={working? green : red}/>
            </div>
            <div className="data-icons">
              <div className="info">
                <p className="percentage">{battery}%</p>
                <Battery percentage={battery} color={green} />
              </div>
              <div className="info">
                <p className="percentage">{fertilizer}%</p>
                <Fertilizer percentage={fertilizer}/>
              </div>
            </div>
          </div>
          <Typography paragraph color={white}>
            {vehicle.description}
          </Typography>
          <div className="card-footer">
            <Typography variant="subtitle" color={white}>
              Ultima atualização: {moment(lastUpdate).fromNow()}
            </Typography>
            {alerts.length > 0?
              <div className="alerts-div">
                {alerts.length > 1 ?
                  <p className="alerts-number">{alerts.length}</p>
                : null}
                <GoAlert color={yellow} size={20}/>
              </div>
              : null
            }
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VehicleCard;
