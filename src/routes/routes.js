import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import SM from '../SM';
import SS from '../SS';
import Contrato from '../Contrato';

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
