import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, OutlinedInput, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PurpleButton } from '../../components/Buttons';
import { createUser } from '../../services/axios/userService';
import { useAlertContext } from '../../contexts/alertsContext';
import { saveToken } from '../../services/auth';

const Register = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [email, setEmail] = useState("");
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const save = async () => {
    const request = await createUser(nome, email, senha);
    if (request.success) {
      showSuccessAlert('Usuário criado.');
      saveToken(request.data);
      history.push('/');
      return
    }
    showErrorAlert('Ocorreu um erro ao criar o usuário')
  }

  return (

    <div>
      <h1 className='title'>Novo Usuário</h1>
      <div className='around-form-div'>
        <div className='form-div'>
          <form>
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
              <div className="btn">
                <PurpleButton
                  fullWidth
                  onClick={save}>Cadastrar</PurpleButton>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Register;