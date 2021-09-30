import { useHistory, useParams } from 'react-router-dom';
import './style.css'
import VehicleForm from '../../components/VehicleForm';
import { useEffect, useState } from 'react';
import { updateVehicle, getVehicleByID, deleteVehicle } from '../../services/axios/vehicleService';
import { useAlertContext } from '../../contexts/alertsContext';
import ConfirmDialog from '../../components/ConfirmDialog';
import VehicleCode from '../../components/VehicleCode';

const UpdateVehicle = () => {
  const { id } = useParams();
  const history = useHistory();
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const [initialVehicle, setInitialVehicle] = useState({})
  const [openDeleteVehicle, setDeleteVehicle] = useState(false)

  useEffect(() => {
    const getVehicleData = async () => {
      const response = await getVehicleByID(id);
      if (response.success) {
        setInitialVehicle(response?.data)
        return
      }
      showErrorAlert('Veículo não encontrado')
    }

    getVehicleData();
  }, [id]);

  const saveVehicle = async (name, description, fertilizer, fAmount) => {
    const request = await updateVehicle(id, name, description, fertilizer, fAmount, initialVehicle.code)
    if(request.success){
      showSuccessAlert('Veículo salvo')
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao salvar veículo')
  }

  const eraseVehicle = async () => {
    await deleteVehicle(id)
    history.push('/')
  }

  return (
    <div className="page-container">
      <h1 className='title'>Editar Veículo</h1>
      <div className="verification-code">
        <VehicleCode code={initialVehicle?.code} />
      </div>
      <VehicleForm save={saveVehicle} initialData={initialVehicle} update erase={() => setDeleteVehicle(true)}/>
      <ConfirmDialog
        title="Deseja deletar esse veículo?"
        open={openDeleteVehicle}
        setOpen={setDeleteVehicle}
        onConfirm={eraseVehicle}
      >
        Tem certeza que deseja deletar esse veículo? Essa ação não pode ser desfeita!
      </ConfirmDialog>
    </div>
  );
};

export default UpdateVehicle;