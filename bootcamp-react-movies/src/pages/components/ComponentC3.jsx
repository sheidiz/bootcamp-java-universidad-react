import React from 'react'
import { useAppContext } from '../context/app.context'

const ComponentC3 = () => {
    const { getContextValue } = useAppContext();
    return (
        <>
            <label> El valor es: {getContextValue} </label>
        </>

    )
}

export default ComponentC3