import { useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, OutlinedInput, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PurpleButton } from '../../components/Buttons';
import { createUser, resetPassword, updateUser } from '../../services/axios/userService';
import { useAlertContext } from '../../contexts/alertsContext';
import Grid from '@mui/material/Grid';


import "./index.css";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  let query = useQuery();
  const token = query.get('token');
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const savePassword = async () => {
    const request = await resetPassword(token, senha);
    if (request.success) {
      showSuccessAlert('Senha atualizada.')
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao atualizar a senha')
  }

  if (!token) {
    history.push('/');
    showErrorAlert('Token inexistente');
  }

  return (
    <Grid container justifyContent="center">
      <Grid>
        <h1 className='title'>Editar Usuário</h1>
        <form>
          <h3>Alterar senha</h3>
          <p>Nova Senha:</p>
          <FormControl fullWidth variant="outlined">
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
          <FormControl fullWidth variant="outlined">
            <p>Repetir senha:</p>
            <OutlinedInput
              id="outlined-adornment-password"
              type={mostrarSenha ? 'text' : 'password'}
              error={senha !== confirmarSenha}
              value={confirmarSenha}
              onChange={(e) => {
                setConfirmarSenha(e.target.value)
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
              disabled={senha !== confirmarSenha}
              onClick={savePassword}>Alterar senha</PurpleButton>
          </div>
        </form>
      </Grid>
    </Grid>
  );

}

export default ResetPassword;