import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Página de inicio
import ErrorPage from './pages/ErrorPage';
import Proyectos from './pages/Proyectos';
import './styles/App.css'
const App = () => {
  return (
    <Router>
     

      <Routes>
        {/* Ruta que redirige al Home cuando se carga localhost */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Otras rutas */}
        <Route path="/home" element={<Home />} />
         <Route path="*" element={<ErrorPage />} />
         <Route path="/proyectos" element={<Proyectos />} />

      </Routes>
    </Router>
  );
};

export default App;
