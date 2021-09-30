import { useHistory } from 'react-router-dom';
import './style.css'
import VehicleForm from '../../components/VehicleForm';
import VehicleCodeInput from '../../components/VehicleCodeInput';
import { useState } from 'react';
import { createVehicle } from '../../services/axios/vehicleService';
import { useAlertContext } from '../../contexts/alertsContext';
import { translateCreateVehicleErrors } from '../../utils/errorsTranslator'

const CreateVehicle = () => {
  const history = useHistory();
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const [code, setCode] = useState('')

  const handleCodeInput = (value) => {
    setCode(value.toUpperCase())
  }

  const createNewVehicle = async (name, description, fertilizer, fAmount) => {
    const request = await createVehicle(name, description, fertilizer, fAmount, code)
    if (request.success){
      showSuccessAlert('Veículo criado')
      history.push('/')
      return
    }
    const error = translateCreateVehicleErrors(request.data.error.message)
    showErrorAlert(error)
  }

  return (
    <div className="page-container">
      <h1 className='title'>Novo Veículo</h1>
      <div className="verification-code">
        <VehicleCodeInput value={code} onChange={(value) => handleCodeInput(value)}/>
      </div>
      <VehicleForm save={createNewVehicle} disableButton={code.length < 4}/>
    </div>
  );
};

export default CreateVehicle;