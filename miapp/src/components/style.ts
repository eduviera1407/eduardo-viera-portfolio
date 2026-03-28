import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Cambia a 'dark' si prefieres un tema oscuro
    primary: {
      main: '#2563eb', // Azul principal
      contrastText: '#ffffff', // Texto blanco en botones o elementos principales
    },
    secondary: {
      main: '#ff4081', // Rosa secundario
      contrastText: '#ffffff', // Texto blanco en botones o elementos secundarios
    },
    background: {
      default: '#f4f4f4', // Color de fondo general
      paper: '#ffffff', // Fondo de componentes como tarjetas o modales
    },
    text: {
      primary: '#333333', // Color principal para textos
      secondary: '#666666', // Color secundario para textos menos destacados
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2563eb', // Color principal en encabezados grandes
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Evitar que los botones tengan texto en mayúsculas por defecto
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordes redondeados para botones
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2563eb', // Fondo azul en AppBar
        },
      },
    },
  },
});

export default theme;
