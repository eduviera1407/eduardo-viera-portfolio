import ReactDOM from 'react-dom/client'; 
import App from './App';
import CssBaseline from '@mui/material/CssBaseline'; 
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/style'; // Asegúrate de tener tu tema configurado

// Crear el root en el elemento con ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <ThemeProvider theme={theme}> 
    <CssBaseline /> 
    <App />
  </ThemeProvider>
);
