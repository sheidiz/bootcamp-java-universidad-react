import React from 'react'
import { useAppContext } from '../context/ViewContext'

const ComponentView3 = () => {
    // obtiene el getContextValue del provider
    const { getContextValue, setContextValue } = useAppContext();
    const enviarValorAlContexto = () => {
        setContextValue('ABC');
    }
    return (
        <div>
            <hr />
            El valor del contexto es : {getContextValue}
            <button onClick={enviarValorAlContexto}>
                Reset
            </button>
        </div>
    )
}

export default ComponentView3