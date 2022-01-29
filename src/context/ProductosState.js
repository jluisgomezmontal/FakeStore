import React, { useEffect, useReducer, useState } from 'react';
import { ADD, GET } from '../types';
import { productoContext } from './productoContext';
import { productosReducer } from './productoReducer';

export const ProductosState = props => {
    
    const initialState = {
        carrito: [],
        total: 0,
        cargando: false,
    }
    
    //Creando dispatch y state
    const [state, dispatch] = useReducer(productosReducer, initialState);

    //obtener productos
    const agregarCarrito = nuevoProducto => {
        dispatch({
            type: ADD,
            payload: nuevoProducto,
        })
    }


    return(
        <productoContext.Provider
            value={{
                productos: state.productos,
                carrito: state.carrito,
                total: state.total,
                cargando: state.cargando,
                agregarCarrito,
            }}
        >
            {props.children}
        </productoContext.Provider>
    )
};
