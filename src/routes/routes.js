import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SM from '../pages/SM';
import SS from '../pages/SS';
import Contrato from '../pages/Contrato';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sm" element={<SM />} />
      <Route path="/ss" element={<SS />} />
      <Route path="/contrato" element={<Contrato />} />
    </Routes>
  );
}

export default AppRoutes;
