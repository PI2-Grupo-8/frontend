import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlertContext } from '../../contexts/alertsContext';
import VehicleCard from '../../components/VehicleCard'
import { getVehiclesByUser } from '../../services/axios/vehicleService';
import './style.css'

const HomePage = () => {
  const [vehicles, setVehicles] = useState([])
  const history = useHistory();
  const { showSuccessAlert, showErrorAlert } = useAlertContext()

  useEffect(() => {
    const getVehiclesList = async () => {
      const request = await getVehiclesByUser()
      if (request.success) {
        setVehicles(request.data)
        return
      }
      showErrorAlert('Ocorreu um erro ao buscar veículos')
    }
    getVehiclesList()
  })

  return (
    <div className="page-container">
      <h1 className='title'>Meus Veículos</h1>
      <div className="cards">
        {vehicles.map((vehicle) =>
          <VehicleCard vehicle={vehicle} />
        )}
      </div>
    </div>
  );
};

export default HomePage;