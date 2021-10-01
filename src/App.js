import './App.css';
import Routes from './routes';
import AlertProvider from './contexts/alertsContext';

function App() {
  return (
    <AlertProvider>
      <Routes />
    </AlertProvider>
  );
}

export default App;
