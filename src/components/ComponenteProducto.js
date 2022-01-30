import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { productoContext } from '../context/productoContext';
import { useCounter } from '../hooks/useCounter';

const initialState = 0;

export const ComponenteProducto = props => {
  const [alerta, setAlerta] = useState(false);
  const [agregado, setAgregado] = useState(false);

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
    //validar counter
    if(counter < 1){
      setAlerta(true)
      setTimeout(() => {
        setAlerta(false)
      }, 800);
      return
    }
    //actualizarProducto(objCarrito);
    setAgregado(true);
    setTimeout(() => {
      setAgregado(false);      
    }, 800);
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
            {
              alerta ?
              <p id='alerta' >Minimo Agregue 1 acticulo</p>
              :null            
            }
            {
              agregado ?
              <p id='agregado' >Producto Agregado</p>
              :null
            }
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
                    <input type='submit' value='AGREGAR' />
                    
                  </div>
                    
              }
              

            </form>
        </div>
    </div>
    
  );
};
