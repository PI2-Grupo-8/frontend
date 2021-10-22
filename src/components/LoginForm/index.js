import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, OutlinedInput, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PurpleButton, WhiteButton } from '../../components/Buttons';
import { login } from '../../services/axios/userService';
import Logo from "./../../assets/logo.png"
import { useAlertContext } from '../../contexts/alertsContext';
import { saveToken } from '../../services/auth';

import "./index.css";

const LoginForm = () => {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState("");
  const [email, setEmail] = useState("");
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const loginAction = async () => {
    const response = await login(email, senha);
    if (response.success) {
      showSuccessAlert('Login realizado.')
      saveToken(response.data);
      history.push('/')
      return
    }
    showErrorAlert('Ocorreu um erro ao logar')
  }

  return (

    <div className="loginForm">
      <div className='around-form-div'>
        <div className='form-div'>
          <div className='center'>
            <img class="logo" src={`${Logo}`} /></div>
          <form>
            <div className="center" id="email-field">
              <TextField
                variant="outlined"
                fullWidth
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              /></div>
            <div className="center " id="password-field" >
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  placeholder="Senha"
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
                />
              </FormControl></div>
            <div className="center">
              <PurpleButton
                fullWidth
                onClick={loginAction}>Entrar</PurpleButton>
            </div>
            <div className="center register-btn">
              <WhiteButton
                fullWidth
                onClick={() => history.push('/signup')}>
                Cadastrar</WhiteButton>
            </div>
            <div className="center forgot-password">
              <Link to="/forgotpassword">Esqueci minha senha</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default LoginForm;