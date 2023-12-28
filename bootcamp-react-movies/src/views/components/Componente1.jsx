import React from 'react'
import { AppContextProvider } from '../context/ViewContext'
import ComponentView2 from './Componente2'
import ComponentView3 from './Componente3'

const Componente1view1 = () => {
    return (
        <div>
            <AppContextProvider>
                <ComponentView2 />
                <ComponentView3 />
            </AppContextProvider>
        </div>
    )
}

export default Componente1view1