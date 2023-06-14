import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../component';

 const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body kode_negara={'id'} />} />
        <Route path="/us" element={<Body kode_negara={'us'}/>} />
        <Route path="/ar" element={<Body kode_negara={'ae'}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
