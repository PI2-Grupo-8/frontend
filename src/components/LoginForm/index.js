import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, OutlinedInput, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PurpleButton } from '../../components/Buttons';
import { login } from '../../services/axios/userService';
import { useAlertContext } from '../../contexts/alertsContext';
import { saveToken } from '../../services/auth';

const LoginForm = () => {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState("");
  const [email, setEmail] = useState("");
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const save = async () => {
    const response = await login(email, senha);
    if (response.success) {
      console.log(response);
      showSuccessAlert('Usuário criado.')
      saveToken(response.data.token);
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao logar')
  }

  return (

    <div>
      <div className='around-form-div'>
        <div className='form-div'>
          <form>
            <p>E-mail:</p>
            <TextField
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              multiline
              maxRows={1}
            />
            <FormControl fullWidth variant="outlined">
              <p>Senha:</p>
              <OutlinedInput
                id="outlined-adornment-password"
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value)
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                      edge="end"
                    >
                      {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div className="btn">
              <PurpleButton
                fullWidth
                onClick={save}>Login</PurpleButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default LoginForm;