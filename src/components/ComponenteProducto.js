import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const ComponenteProducto = ({id, title, price, description, category, image}) => {

  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div className="contenedor_producto">
        <div className="logo_contenedor" >
            <img className="logo" src={image} alt={title} />
        </div>
        <div className='info_producto'>
            <h3>{id}.-{title}</h3>
            <p>{description}</p>
            <p>Categoria: {' ' + category}{' '}<span>{' $'+price}</span></p>
            <form action="submit">
              <input onClick={decrement} type='button' value='-' min='0'/>
              <input type="number" value={counter} />
              <input onClick={increment} type='button' value='+' />
              <input type='button' value='AGREGAR' />
            </form>
        </div>
    </div>
    
  );
};
