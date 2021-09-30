import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import { Alert, Snackbar } from '@mui/material';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [openAlert, setOpenAlert] = useState(false)
  const [alertText, setAlertText] = useState('false')
  const [alertSeverity, setAlertSeverity] = useState('success')

  const showAlert = (message) => {
    setAlertText(message)
    setOpenAlert(true)
  }
  const showSuccessAlert = (message) => {
    setAlertSeverity('success')
    showAlert(message)
  }

  const showErrorAlert = (message) => {
    setAlertSeverity('error')
    showAlert(message)
  }

  return (
    <AlertContext.Provider value={{
      showSuccessAlert,
      showErrorAlert
    }}
    >
      {children}
      <Snackbar
        spacing={10}
        open={openAlert}
        autoHideDuration={6000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{
          margin: "60px auto"
        }}
      >
        <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};

export default AlertProvider;

export function useAlertContext() {
  const Context = useContext(AlertContext);
  return { ...Context };
}