import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { productoContext } from '../context/productoContext';
import { useCounter } from '../hooks/useCounter';

const initialState = 0;

export const ComponenteProducto = props => {

  const { pathname:location } = useLocation();

  const {id, title, price, description, category, image, piezas} = props;

  //Obteniendo el State
  const productosReducer = useContext(productoContext);
  const { agregarCarrito } = productosReducer;
  
  const { counter, increment, decrement, reset } = useCounter(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    const objCarrito = {
      id, title, price , image, piezas: counter, subtotal: price * counter,description, category
    };
    //actualizarProducto(objCarrito);
    agregarCarrito(objCarrito);
    reset();    
  }  
  return (
    <div className="contenedor_producto">
        <div className="logo_contenedor" >
            <img className="logo" src={image} alt={title} />
        </div>
        <div className='info_producto'>
            <h3>{id}.-{title}</h3>
            <p>{description}</p>
            <p>Categoria: {' ' + category}{' '}<span>{' $'+price.toFixed(2)}</span></p>
            <form action="submit" onSubmit={handleSubmit}
            >
              {

                location==='/carrito'?
                  
                  <p>Piezas:{' '}<span>{piezas}</span></p>
                  :
                  <div>
                  {
                    counter  < 1 ? null :
                    <input onClick={decrement} type='button' value='-' min='0'/>
                  }
                    <input min="0" type="number" value={counter} />
                    <input onClick={increment} type='button' value='+' />
                    <Popup trigger={<input type='submit' value='AGREGAR' />} position="right center">
                    <button>Agregado</button>
                    </Popup>
                    
                  </div>
                    
              }
              

            </form>
        </div>
    </div>
    
  );
};
