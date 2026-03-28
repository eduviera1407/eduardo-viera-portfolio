import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import MenuDrawer from '../components/MenuDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#4b0082',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

const proyectosData = [
  {
    id: 1,
    titulo: 'Aprende Jugando',
    descripcion:
        'Aprende Jugando es una aplicación educativa multiplataforma desarrollada en C# con WPF (.NET 8). Está pensada para niños de entre 6 y 12 años, con el objetivo de reforzar sus conocimientos en materias como Matemáticas, Lengua, Lógica y Ciencias a través de minijuegos interactivos, visuales y auditivos.',
    enlace: 'https://github.com/eduviera1407/PROYECTO-FINAL-DAM-APRENDE-JUGANDO',
    videoEmbed: 'https://drive.google.com/file/d/1GJeDsn7F3ifZKRAXa4kAbZ1sDYP81JiL/preview',
  },
  {
    id: 2,
    titulo: 'Portafolio personal',
    descripcion: 'Un portafolio interactivo personal y navegación intuitiva.',
    enlace: 'https://github.com/eduviera1407/portafolio-3d',
    imagen: '/portafolios.png',
  },
  {
    id: 3,
    titulo: 'App CRUD con Jetpack Compose',
    descripcion: 'Una aplicación Android que implementa operaciones CRUD usando Firebase.',
    enlace: 'https://github.com/eduviera1407/app-crud-compose',
    videoEmbed: 'https://drive.google.com/file/d/1mpYjxritADfnA7tZsRMwG7UN1VohOWmo/preview',
  },
  {
    id: 4,
    titulo: 'OFF-STOP',
    descripcion: 'Una aplicación desarrollada en Java con la función de apagar o parar el PC (Windows).',
    enlace: 'https://github.com/eduviera1407/OffStop.git',
    video: '/OFFSTOP.mp4',
  },
  {
    id: 5,
    titulo: 'Analisis de egresados de formación profesional de Canarias',
    descripcion:
        'El objetivo es trabajar con un conjunto de datos real del Gobierno de Canarias relacionado con los egresados de Formación Profesional, almacenarlo en Amazon S3 y procesarlo posteriormente con EMR.',
    enlace: 'https://github.com/eduviera1407/Actividad-01-aws-emr-egresados-fp-canarias.git',
    imagen: '/Egresados_FP_Canarias.png',
  },
  {
    id: 6,
    titulo: 'Diseño y Control de un Brazo Robótico en CoppeliaSim',
    descripcion:
        'Este proyecto documenta el proceso completo de creación de un brazo robótico, abarcando desde la generación de primitivas hasta la implementación de scripts de control.',
    enlace: 'https://github.com/eduviera1407/BrazoRobotico.git',
    video: '/coppeliasim.mp4',
  },
  {
    id: 7,
    titulo: 'Gestión de Productos Retro',
    descripcion:
        'El objetivo es crear una herramienta que facilite la gestión de productos retro, haciendo uso de una interfaz gráfica para la comunicación con el usuario, conexión a una base de datos MySQL y manipulación de archivos de texto para ejecutar sentencias SQL.',
    enlace: 'https://github.com/eduviera1407/gestion-productos-retro.git',
    video: '/Funcionamiento ProductosRetro.mp4',
  },
  {
    id: 8,
    titulo: 'Introduccion-a-Python',
    descripcion:
        'Repositorio con actividades, ejercicios y notebooks realizados durante la asignatura o bloque de introducción a Python.',
    enlace: 'https://github.com/eduviera1407/Introduccion-a-Python.git',
    video: '/introduccion-python.mp4',
  },
];

const Proyectos = () => {
  const [proyectos, setProyectos] = React.useState(proyectosData);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    const reorderedProyectos = Array.from(proyectos);
    const [movedProyecto] = reorderedProyectos.splice(source.index, 1);
    reorderedProyectos.splice(destination.index, 0, movedProyecto);

    setProyectos(reorderedProyectos);
  };

  const renderMedia = (proyecto) => {
    if (proyecto.videoEmbed) {
      return (
          <Box sx={{ width: '100%', height: 300 }}>
            <iframe
                src={proyecto.videoEmbed}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ border: 'none' }}
                title={proyecto.titulo}
            />
          </Box>
      );
    }

    if (proyecto.video) {
      return (
          <CardMedia
              component="video"
              src={proyecto.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              width="100%"
              height="300"
              sx={{
                objectFit: 'contain',
                cursor: 'pointer',
                backgroundColor: '#000',
              }}
              onClick={(e) => {
                const video = e.currentTarget;
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                  video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                  video.msRequestFullscreen();
                }
              }}
          />
      );
    }

    return (
        <CardMedia
            component="img"
            alt={proyecto.titulo}
            height="300"
            image={proyecto.imagen}
            sx={{
              objectFit: 'cover',
            }}
        />
    );
  };

  return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <MenuDrawer />
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
          <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                color: 'primary.main',
                fontWeight: 700,
              }}
          >
            Mis Proyectos
          </Typography>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided) => (
                  <Box
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                      }}
                  >
                    {proyectos.map((proyecto, index) => (
                        <Draggable key={proyecto.id} draggableId={String(proyecto.id)} index={index}>
                          {(provided) => (
                              <Card
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  sx={{
                                    width: 450,
                                    background: 'linear-gradient(45deg, #4b0082, #3a006b, #2563eb)',
                                    backgroundSize: '300% 300%',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    borderBottom: `3px solid ${theme.palette.primary.main}`,
                                    overflow: 'hidden',
                                  }}
                              >
                                {renderMedia(proyecto)}

                                <CardContent sx={{ flexGrow: 1 }}>
                                  <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 700 }}>
                                    {proyecto.titulo}
                                  </Typography>

                                  <Typography
                                      variant="body2"
                                      sx={{
                                        color: 'rgba(255,255,255,0.82)',
                                        lineHeight: 1.7,
                                        whiteSpace: 'pre-line',
                                      }}
                                  >
                                    {proyecto.descripcion}
                                  </Typography>
                                </CardContent>

                                <CardActions sx={{ px: 2, pb: 2 }}>
                                  <Button
                                      size="small"
                                      variant="contained"
                                      href={proyecto.enlace}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        textTransform: 'none',
                                        '&:hover': {
                                          backgroundColor: theme.palette.primary.dark,
                                        },
                                      }}
                                  >
                                    Ver Proyecto
                                  </Button>
                                </CardActions>
                              </Card>
                          )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </ThemeProvider>
  );
};

export default Proyectos;
