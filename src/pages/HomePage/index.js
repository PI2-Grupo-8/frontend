import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlertContext } from '../../contexts/alertsContext';
import VehicleCard from '../../components/VehicleCard'
import { getVehiclesByUser } from '../../services/axios/vehicleService';
import './style.css'
import Fab from '@mui/material/Fab';
import { MdAdd } from "react-icons/md";
import Box from '@mui/material/Box';
import { green, white } from '../../constants/colors';

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
        {vehicles.map((vehicle, idx) =>
          <VehicleCard vehicle={vehicle} key={idx} />
        )}
      </div>
      <div className="add-button">

      <Fab sx={{
          background: green,
          color: white,
          '&:hover': {
            backgroundColor: green
          }
        }}
        onClick={() => history.push('/vehicle/create')}
        >
        <MdAdd size={25}/>
      </Fab>
      </div>
    </div>
  );
};

export default HomePage;