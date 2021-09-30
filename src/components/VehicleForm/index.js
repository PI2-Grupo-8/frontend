import { useState } from 'react';
import './style.css'
import { TextField, InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import { PurpleButton, RedButton } from '../ColorButtons';
import { purple } from '../../constants/colors';

const VehicleForm = ({ edit, save, erase }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fertilizer, setFertilizer] = useState('')
  const [fAmount, setFAmount] = useState('')

  return (
    <div className='around-form-div'>
      <div className='form-div'>
        <p>Nome:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Descrição:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
        />
        <p>Fertilizante a ser aplicado:</p>
        <TextField
          variant="outlined"
          fullWidth
          value={fertilizer}
          onChange={(e) => setFertilizer(e.target.value)}
        />
        <p>Quantidade de fertilizante por planta:</p>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            value={fAmount}
            onChange={(e) => setFAmount(e.target.value)}
            endAdornment={<InputAdornment position="end">ml</InputAdornment>}
            type="number"
          />
        </FormControl>
        <div className="buttons">
          <div className="btn">
            <PurpleButton
              fullWidth
              onClick={() => save(name, description, fertilizer, fAmount)}>
              { edit? 'Salvar' : 'Cadastrar' }
            </PurpleButton>
          </div>
          <div className="btn">
            <RedButton
              fullWidth
              onClick={() => console.log('clicou')}>
              {edit ? 'Apagar Veículo' : 'Cancelar' }
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;