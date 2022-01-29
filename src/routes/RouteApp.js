import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carro } from '../components/Carro';
import { Categoria } from '../components/Categoria';
import { Productos } from '../components/Productos';
import { FakeStore } from '../FakeStore';
import { ProductosState } from '../context/ProductosState';

export const RouteApp = () => {
  return(
    <ProductosState>
      <BrowserRouter>
          <FakeStore/>
          <Routes>
              <Route path='/' element={<Productos />}/>
              <Route path='/categorias' element={<Categoria />}/>
              <Route path='/carrito' element={<Carro />}/>
          </Routes>
      </BrowserRouter>
    </ProductosState>
  );
};
