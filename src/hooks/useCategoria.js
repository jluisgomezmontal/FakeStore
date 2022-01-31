import { useState } from "react";

export const useCategoria = (label, initialState, opciones ) => {

    const [state, setState] = useState(initialState);



    
    const SelectCripto = ()=>(
        <>
            <select 
            onChange={ e=> setState(e.target.value) }
            value={ state}
            >
                <option value='' >----{label}----</option>
            {
                opciones.map(opcion => (
                    <option key={opcion} value={opcion} >{opcion.toUpperCase()}</option>
                )) 
            }
    
            </select>
        </>
    );

    return [ state, SelectCripto ];
}
