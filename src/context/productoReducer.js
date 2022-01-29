import { ADD } from '../types';

export const productosReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const carrito = [...state.carrito, action.payload];
            const {total, cantidad} = carrito.reduce((acc,articulo)=>({
            total: acc.total + articulo.subtotal,
            cantidad: acc.cantidad + articulo.cantidad
            }), {total:0, cantidad: 0})
            return {
            ...state, carrito, total, cantidad
            };
        
        default:
            return state;
    }
};
