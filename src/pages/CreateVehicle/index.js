import './style.css'
import VehicleForm from '../../components/VehicleForm';
import VehicleCode from '../../components/VehicleCode';
import { useState } from 'react';
import { createVehicle } from '../../services/axios/vehicleService';

const CreateVehicle = () => {
  const [code, setCode] = useState('')

  const handleCodeInput = (value) => {
    setCode(value.toUpperCase())
  }

  const createNewVehicle = (name, description, fertilizer, fAmount) => {
    createVehicle(name, description, fertilizer, fAmount, code)
  }

  return (
    <div className="page-container">
      <h1 className='title'>Novo Veículo</h1>
      <div className="verification-code">
        <VehicleCode value={code} onChange={(value) => handleCodeInput(value)}/>
      </div>
      <VehicleForm save={createNewVehicle}/>
    </div>
  );
};

export default CreateVehicle;