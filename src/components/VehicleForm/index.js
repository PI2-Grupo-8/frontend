import { useEffect, useState } from 'react';
import './style.css'
import { TextField, InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import { PurpleButton, RedButton } from '../Buttons';
import { useHistory } from 'react-router-dom';


const VehicleForm = ({ update, save, erase, disableButton, initialData }) => {
  const history = useHistory();

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fertilizer, setFertilizer] = useState('')
  const [fAmount, setFAmount] = useState('')

  const [errorName, setErrorName] = useState(false)
  const [errorDescription, setErrorDescription] = useState(false)
  const [errorFertilizer, setErrorFertilizer] = useState(false)
  const [errorFAmount, setErrorFAmount] = useState(false)

  useEffect(() => {
    if(initialData) {
      setName(initialData.name ?? '')
      setDescription(initialData.description ?? '')
      setFertilizer(initialData.fertilizer ?? '')
      setFAmount(initialData.fertilizerAmount ?? '')
    }
  }, [initialData])

  const redButtonFunc = () => {
    if(update && erase){
      erase()
      return
    }
    history.push('/')
  }

  return (
    <div className='around-form-div'>
      <div className='form-div'>
        <p>Nome:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setErrorName(e.target.value ? false : true)
          }}
          error={errorName}
        />
        <p>Descrição:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
            setErrorDescription(e.target.value ? false : true)
          }}
          multiline
          maxRows={4}
          error={errorDescription}
        />
        <p>Fertilizante a ser aplicado:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={fertilizer}
          onChange={(e) => {
            setFertilizer(e.target.value)
            setErrorFertilizer(e.target.value ? false : true)
          }}
          error={errorFertilizer}
        />
        <p>Quantidade de fertilizante por planta:</p>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            value={fAmount}
            onChange={(e) => {
              setFAmount(e.target.value)
              setErrorFAmount(e.target.value ? false : true)
            }}
            endAdornment={<InputAdornment position="end">ml</InputAdornment>}
            type="number"
            error={errorFAmount}

          />
        </FormControl>
        <div className="buttons">
          <div className="btn">
            <PurpleButton
              disabled={!name || !description || !fertilizer || !fAmount || disableButton}
              fullWidth
              onClick={() => save(name, description, fertilizer, fAmount)}>
              { update? 'Salvar' : 'Cadastrar' }
            </PurpleButton>
          </div>
          <div className="btn">
            <RedButton
              fullWidth
              onClick={redButtonFunc}>
              { update && erase ? 'Apagar Veículo' : 'Cancelar' }
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;