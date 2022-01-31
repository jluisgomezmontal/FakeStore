import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carro } from '../components/Carro';
import { Categoria } from '../components/Categoria';
import { Productos } from '../components/Productos';
import { FakeStore } from '../FakeStore';
import { ProductosState } from '../context/ProductosState';
import { Compra } from '../components/Compra';

export const RouteApp = () => {
  return(
    <ProductosState>
      <BrowserRouter>
          <FakeStore/>
          <Routes>
              <Route path='/' element={<Productos />}/>
              <Route path='/categorias' element={<Categoria />}/>
              <Route path='/carrito' element={<Carro />}/>
              <Route path='/compra' element={<Compra />}/>
          </Routes>
          <footer>
            <h2>Aplicacion creada por Jose Luis Gomez Montalvan</h2>
            <a target='_blank' href="https://github.com/jluisgomezmontal/mijotest" rel="noopener noreferrer">GitHub</a>
          </footer>  
      </BrowserRouter>
    </ProductosState>
  );
};
