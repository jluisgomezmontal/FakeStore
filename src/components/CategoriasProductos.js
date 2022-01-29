import React, { useEffect, useState } from 'react';
import { ComponenteProducto } from './ComponenteProducto';
import { Spinner } from './Spinner';

export const CategoriasProductos = ({categoria}) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);


    useEffect(() => {
        const consultarApi = async () => {
            const url =`https://fakestoreapi.com/products/category/${categoria}`;
            const response = await fetch(url);
            const result = await response.json();
            setProductos(result);
            setCargando(true)
            setTimeout(() => {
                setCargando(false)

            }, 500);


        }

        consultarApi();
    }, [categoria]);
  return (
    <div>

        {
            cargando?
            <Spinner/>:
            productos.map(({id, title, price, description, category, image}) => (
                <ComponenteProducto
                key={id}
                id={id}
                title={title} 
                price={price} 
                description={description} 
                category={category} 
                image={image}
              />
            ))
        }
    </div>
    
    );
};
