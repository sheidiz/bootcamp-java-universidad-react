import React from 'react'
import { useAppContext } from '../context/ViewContext'

const ComponentView2 = () => {
    // obtener la 'funcion' setContextValue del provider
    const { setContextValue } = useAppContext();
    const cambiarValorEnContexto = () => {
        setContextValue('A');
    }
    return (
        <div>
            <button onClick={cambiarValorEnContexto}>
                Enviar Valor
            </button>
        </div>
    )
}

export default ComponentView2