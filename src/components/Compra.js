import React from 'react';
import { Link } from 'react-router-dom';

export const Compra = () => {
  return(
      <div className="contenedor">
          <h1>Gracias por su Compra</h1>
          <Link to='/'>Regresar al Home</Link>
      </div>
  );
};
