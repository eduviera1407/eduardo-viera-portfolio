import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ListItemText, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import { Tooltip } from '@mui/material';
import '../styles/App.css'; // Importamos el archivo de estilo

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle para abrir y cerrar el drawer
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
      <AppBar
          position="fixed"
          className="appBar"
          sx={{
            backgroundColor: 'rgba(15, 15, 20, 0.75)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
          }}
      >
        <Toolbar className="toolbar">
          <IconButton
              edge="start"
              onClick={() => toggleDrawer(true)}
              className="menuIcon"
              sx={{ color: '#fff' }}
          >
            <Tooltip title="Abrir menú" disableInteractive arrow>
              <MenuIcon />
            </Tooltip>
          </IconButton>

          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: '#fff',
                }}
            >
              Portafolio de Eduardo Viera
            </Typography>
          </div>

          <Button
              component={Link}
              to="/home"
              startIcon={<HomeIcon />}
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontFamily: 'Inter, Arial, sans-serif',
                fontWeight: 500,
                borderRadius: 2,
              }}
          >
            Inicio
          </Button>
        </Toolbar>


      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List className="drawerList">
          <Link to="/" className="drawerLink">
            <ListItem disablePadding className="drawerItem">
              <Tooltip title="Inicio" disableInteractive arrow>
                <ListItemButton className="listItemButton">
                  <ListItemIcon className="drawerIcon">
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </Link>

          <Link to="/proyectos" className="drawerLink">
            <ListItem disablePadding className="drawerItem">
              <Tooltip title="Proyectos" disableInteractive arrow>
                <ListItemButton className="listItemButton">
                  <ListItemIcon className="drawerIcon">
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Proyectos" />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </Link>


        </List>
      </Drawer>
    </AppBar>
  );
};

export default MenuDrawer;
