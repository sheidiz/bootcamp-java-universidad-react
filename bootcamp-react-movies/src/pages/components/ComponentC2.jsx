import React from 'react'
import { useAppContext } from '../context/app.context'

const ComponentC2 = () => {
    const { setContextValue } = useAppContext()
    const cambiarValorDeContexto = () => {
        debugger;
        setContextValue('cambiado desde C2');
    }

    return (
        <div>
            <button onClick={cambiarValorDeContexto}>
                Cambiar
            </button>
        </div>
    )
}

export default ComponentC2