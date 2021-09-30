import { useState } from 'react';
import './style.css'
import { TextField, InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import { PurpleButton, RedButton } from '../ColorButtons';
import { purple } from '../../constants/colors';
import { useHistory } from 'react-router-dom';


const VehicleForm = ({ edit, save, erase, disableButton }) => {
  const history = useHistory();
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fertilizer, setFertilizer] = useState('')
  const [fAmount, setFAmount] = useState('')

  const [errorName, setErrorName] = useState(false)
  const [errorDescription, setErrorDescription] = useState(false)
  const [errorFertilizer, setErrorFertilizer] = useState(false)
  const [errorFAmount, setErrorFAmount] = useState(false)

  const redButtonFunc = () => {
    if(edit){
      erase()
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
          onFocus={(e) => { setErrorName(e.target.value ? false : true) }}
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
          onFocus={(e) => { setErrorDescription(e.target.value ? false : true) }}
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
          onFocus={(e) => { setErrorFertilizer(e.target.value ? false : true) }}
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
            onFocus={(e) => { setErrorFAmount(e.target.value ? false : true) }}
          />
        </FormControl>
        <div className="buttons">
          <div className="btn">
            <PurpleButton
              disabled={!name || !description || !fertilizer || !fAmount || disableButton}
              fullWidth
              onClick={() => save(name, description, fertilizer, fAmount)}>
              { edit? 'Salvar' : 'Cadastrar' }
            </PurpleButton>
          </div>
          <div className="btn">
            <RedButton
              fullWidth
              onClick={redButtonFunc}>
              {edit ? 'Apagar Veículo' : 'Cancelar' }
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;