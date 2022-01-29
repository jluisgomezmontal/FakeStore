import React, { useEffect, useState } from 'react';
import { useCategoria } from '../hooks/useCategoria';
import { CategoriasProductos } from './CategoriasProductos';

export const Categoria = () => {
  const [categorias, setCategorias] = useState([]);

  const [ categoria, SelectCategoria]=useCategoria('SELECCIONE UNA CATEGORIA','', categorias);

  useEffect(() => {
      const consultarApi = async () => {
          const url ='https://fakestoreapi.com/products/categories';
          const response = await fetch(url);
          const result = await response.json();

          setCategorias(result)

      }

      consultarApi();
  }, []);
  return(
    <div className="contenedor">
        <h1>Categoria</h1>
        {   
              <SelectCategoria/>
            }
        <CategoriasProductos
          categoria={categoria}
        />
    </div>
  );
};
