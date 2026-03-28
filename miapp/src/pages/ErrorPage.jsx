import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Mantén el archivo CSS para los estilos globales

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h1" color="error">
                ¡Error 404!
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
                La página que buscas no existe.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Puede que la URL esté mal escrita o la página haya sido eliminada.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome} sx={{ mt: 3 }}>
                Volver a la Página de Inicio
            </Button>
        </Container>
    );
};

export default ErrorPage;
