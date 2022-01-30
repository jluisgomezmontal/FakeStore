import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { productoContext } from '../context/productoContext';
import { ComponenteProducto } from './ComponenteProducto';

export const Carro = () => {

  const { pathname:location } = useLocation();

  const [total, setTotal] = useState(0);

      //Obteniendo el State
  const productosReducer = useContext(productoContext);
  const { carrito } = productosReducer;  
  useEffect(() => {
    setTotal(carrito.reduce((sum, value) => { return sum + value.subtotal},0).toFixed(2))
    console.log(carrito)

  }, []);
  
  return (
    <div className="contenedor">
      {
        carrito.length < 1? 
        <h1>Agrega Productos a tu Carrito</h1>:
        <div>
          <h1>Carro</h1>
        <div className="d_flex">
          <div >
            <h2>Detalles</h2>
            {
              carrito.map( ({id, title, price, description, category, image, piezas}) => (
                <ComponenteProducto
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category ={category}
                image={image}
                piezas={piezas}
                />
                ))
              }
            <Link to='/'>Continuar con la compra</Link>
          </div>
          <div>
            <h2>Subtotal</h2>
            {
              carrito.map( ({id, subtotal}) => (
                <div className='subtotal' key={id}>
                  <h2>{subtotal.toFixed(2)}</h2>
                </div>
                ))
              }
          <h2>Total.-{' '}<span>${total}</span></h2>

          </div>

        </div>
        </div>

      }
        
    </div>
    
  );
};
