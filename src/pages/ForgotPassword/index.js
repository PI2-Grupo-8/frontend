import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { PurpleButton } from '../../components/Buttons';
import { forgotPassword } from '../../services/axios/userService';
import { useAlertContext } from '../../contexts/alertsContext';
import "./index.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { showSuccessAlert, showErrorAlert } = useAlertContext()
  const history = useHistory();

  const savePersonalInfo = async (e) => {
    e.preventDefault();
    const request = await forgotPassword(email);
    if (request.success) {
      showSuccessAlert('Recuperação de senha enviada para o e-mail informado.');
      history.push('/');
      return
    }
    showErrorAlert('Usuário não encontrado.');
  }

  return (
    <div className="forgot-password">
      <div className='around-form-div'>
        <form onSubmit={savePersonalInfo}>
          <h1 className='title'>Recuperar senha</h1>
          <p>E-mail:</p>
          <TextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            onEnter={savePersonalInfo}
          />
          <div className="btn">
            <PurpleButton
              fullWidth
              onClick={savePersonalInfo}>Recuperar Senha</PurpleButton>
          </div>
        </form>
      </div>
    </div>
  );

}

export default ForgotPassword;