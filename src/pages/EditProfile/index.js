import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, OutlinedInput, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PurpleButton } from '../../components/Buttons';
import { createUser, updateUser } from '../../services/axios/userService';
import { useAlertContext } from '../../contexts/alertsContext';
import Grid from '@mui/material/Grid';

import "./index.css";
import { getUser, saveUserInfo } from '../../services/auth';

const EditProfile = () => {
  const user = getUser();
  const [nome, setNome] = useState(user.name);
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [email, setEmail] = useState(user.email);
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const savePersonalInfo = async () => {
    const request = await updateUser({ name: nome, email });
    if (request.success) {
      saveUserInfo(request.data);
      showSuccessAlert('Usuário atualizado.')
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao atualizar o usuário')
  }
  const savePassword = async () => {
    saveUserInfo(request.data);
    const request = await updateUser({ password: senha });
    if (request.success) {
      showSuccessAlert('Usuário atualizado.')
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao atualizar o usuário')
  }


  return (
    <div>
      <h1 className='title'>Editar Usuário</h1>
      <div className='around-form-div'>
        <Grid container spacing={2} >
          <Grid item xs={12} md={6}>
            <form>
              <h3>Dados pessoais</h3>
              <p>Nome:</p>
              <TextField
                variant="outlined"
                fullWidth
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value)
                }}
                multiline
                maxRows={1}
              />
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
              <div className="btn">
                <PurpleButton
                  fullWidth
                  onClick={savePersonalInfo}>Atualizar dados</PurpleButton>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
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
      </div>
    </div>
  );

}

export default EditProfile;