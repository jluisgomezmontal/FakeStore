import React from 'react';
import { Link } from 'react-router-dom';

export const FakeStore = () => {
  return (
    <div className="header">
          <h1><Link to='/'>FakeStore</Link></h1>
          <div className="navegacion">            
              <Link to='/categorias'>Categorias</Link>
              <Link to='/carrito'>Carrito</Link>
          </div>        
    </div>
  );
};
