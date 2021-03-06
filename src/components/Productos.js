import React, {  useEffect, useState } from 'react';
import { ComponenteProducto } from './ComponenteProducto';
import { Spinner } from './Spinner';

export const Productos = () => {

  const [getProducts, setGetProducts] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const consultarApi = async () => {
        const url ='https://fakestoreapi.com/products';
        const response = await fetch(url);
        const result = await response.json();

        setGetProducts(result)
        setCargando(false)       
    }      
    consultarApi();
}, []);
  return (
      <div className="contenedor">
          <h1>Productos</h1>

          { 
            cargando?
            <Spinner/> :
            getProducts.map(({id, title, price, description, category, image}) => (
              <ComponenteProducto
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category ={category}
              image={image}
              
              />
            ))
          }
      </div>
  );
};
