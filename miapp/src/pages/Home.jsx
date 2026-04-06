import React from 'react';
import {FaAws, FaGithub, FaJava, FaLinkedin, FaPython, FaReact} from 'react-icons/fa';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import {AppBar, Box, Button, Card, CardContent, Chip, Container, CssBaseline, Stack, Typography,} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MenuDrawer from '../components/MenuDrawer';
import '../styles/App.css';
import {Link} from 'react-router-dom';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2563eb',
        },
        secondary: {
            main: '#7c3aed',
        },
        background: {
            default: '#16002f',
            paper: 'rgba(255,255,255,0.04)',
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
    },
});

const skills = [
    {label: 'Java', icon: <FaJava/>},
    {label: 'Python', icon: <FaPython/>},
    {label: 'React', icon: <FaReact/>},
    {label: 'SQL', icon: <StorageIcon sx={{fontSize: 18}}/>},
    {label: 'SAP Commerce', icon: <BusinessCenterIcon sx={{fontSize: 18}}/>},
    {label: 'IA / Big Data', icon: <MemoryIcon sx={{fontSize: 18}}/>},
    {label: 'AWS', icon: <FaAws/>},
];

const highlights = [
    {
        title: 'Desarrollo Full-Stack',
        description:
            'Aplicaciones web con frontend en React, backend en Java y Python.',
    },
    {
        title: 'E-commerce',
        description:
            'Experiencia en soluciones orientadas a comercio digital y personalización.',
    },
    {
        title: 'Datos e IA',
        description:
            'Perfil en crecimiento con foco en Big Data e inteligencia artificial.',
    },
];

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <Box
                sx={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #32005f 0%, #1e1b7a 100%)',
                }}
            >
                <AppBar
                    position="static"
                    color="transparent"
                    elevation={0}
                    sx={{
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(15, 15, 20, 0.6)',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    <MenuDrawer/>
                </AppBar>

                <Container maxWidth="lg" sx={{py: {xs: 5, md: 8}}}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', md: '1.2fr 0.8fr'},
                            gap: {xs: 4, md: 6},
                            alignItems: 'center',
                            p: {xs: 3, md: 6},
                            borderRadius: 4,
                            background:
                                'linear-gradient(135deg, rgba(36, 5, 76, 0.96), rgba(31, 35, 118, 0.88))',
                            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
                        }}
                    >
                        <Box>
                            <Typography
                                variant="overline"
                                sx={{
                                    letterSpacing: 2,
                                    color: 'rgba(255,255,255,0.75)',
                                }}
                            >
                                PORTAFOLIO · DESARROLLADOR FULL-STACK
                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    mt: 1,
                                    mb: 2,
                                    fontSize: {xs: '2.2rem', md: '3.4rem'},
                                    lineHeight: 1.1,
                                }}
                            >
                                Eduardo Viera
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#e7d7a8',
                                    fontWeight: 500,
                                    mb: 2,
                                    fontSize: {xs: '1.2rem', md: '1.6rem'},
                                }}
                            >
                                Desarrollador Full-Stack con experiencia en Java, React,
                                Python y SQL
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255,255,255,0.82)',
                                    maxWidth: 650,
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Construyo aplicaciones y soluciones orientadas a e-commerce,
                                backend y datos. Actualmente sigo reforzando mi perfil en
                                inteligencia artificial y Big Data.
                            </Typography>

                            <Stack
                                direction={{xs: 'column', sm: 'row'}}
                                spacing={2}
                                sx={{mt: 4}}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={Link}
                                    to="/proyectos"
                                    sx={{
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                    }}
                                >
                                    Ver proyectos
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() =>
                                        window.open('/CV Eduardo Roque Viera Santana.pdf', '_blank')
                                    }
                                    sx={{
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        color: '#fff',
                                    }}
                                >
                                    Descargar CV
                                </Button>
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={1.2}
                                useFlexGap
                                flexWrap="wrap"
                                sx={{mt: 4}}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1.2}
                                    useFlexGap
                                    flexWrap="wrap"
                                    sx={{mt: 4}}
                                >
                                    {skills.map(({label, icon}) => (
                                        <Chip
                                            key={label}
                                            icon={icon}
                                            label={label}
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.08)',
                                                color: '#fff',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                px: 0.5,
                                                '& .MuiChip-icon': {
                                                    color: '#fff',
                                                    fontSize: '1rem',
                                                },
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Stack>

                            <Stack
                                direction={{xs: 'column', sm: 'row'}}
                                spacing={2}
                                sx={{mt: 4}}
                            >
                                <Button
                                    variant="text"
                                    component="a"
                                    href="https://github.com/eduviera1407"
                                    target="_blank"
                                    rel="noreferrer"
                                    startIcon={<FaGithub/>}
                                    sx={{
                                        color: '#fff',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        p: 0,
                                    }}
                                >
                                    GitHub
                                </Button>

                                <Button
                                    variant="text"
                                    component="a"
                                    href="https://www.linkedin.com/in/eduardo-roque-viera-santana-a66361316"
                                    target="_blank"
                                    rel="noreferrer"
                                    startIcon={<FaLinkedin/>}
                                    sx={{
                                        color: '#fff',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        p: 0,
                                        minWidth: 'auto',
                                    }}
                                >
                                    LinkedIn
                                </Button>
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={`${import.meta.env.BASE_URL}eduardoviera.jpg`}
                                alt="Foto de Eduardo Viera"
                                sx={{
                                    width: { xs: 220, md: 300 },
                                    height: { xs: 220, md: 300 },
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    border: '6px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{mt: 6}}>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 3,
                                fontWeight: 700,
                                textAlign: {xs: 'center', md: 'left'},
                            }}
                        >
                            Lo que aporto
                        </Typography>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {xs: '1fr', md: 'repeat(3, 1fr)'},
                                gap: 3,
                            }}
                        >
                            {highlights.map((item) => (
                                <Card
                                    key={item.title}
                                    sx={{
                                        borderRadius: 3,
                                        bgcolor: 'rgba(255,255,255,0.06)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                    }}
                                >
                                    <CardContent sx={{p: 3}}>
                                        <Typography variant="h6" sx={{mb: 1.5, fontWeight: 700}}>
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(255,255,255,0.78)',
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
