import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlertContext } from '../../contexts/alertsContext';
import VehicleCard from '../../components/VehicleCard'
import { getVehiclesByUser } from '../../services/axios/vehicleService';
import LoginForm from '../../components/LoginForm';
import './style.css'
import Fab from '@mui/material/Fab';
import { MdAdd } from "react-icons/md";
import { green, white } from '../../constants/colors';
import { isAuthenticated } from '../../services/auth';

const HomePage = () => {
  const [vehicles, setVehicles] = useState([])
  const history = useHistory();
  const { showErrorAlert } = useAlertContext()

  useEffect(() => {
    const getVehiclesList = async () => {
      const request = isAuthenticated() && await getVehiclesByUser();
      if (request.success) {
        setVehicles(request.data)
        return
      }
      else isAuthenticated() && showErrorAlert('Ocorreu um erro ao buscar veículos')
    }
    getVehiclesList()
  }, [])

  const loggedHomePage = (<div className="page-container">
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
        <MdAdd size={25} />
      </Fab>
    </div>
  </div>);
  return (
    <>
      {isAuthenticated() ? loggedHomePage : <LoginForm />}
    </>
  );
};

export default HomePage;