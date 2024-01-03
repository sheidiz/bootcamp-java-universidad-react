import React from 'react'
import { AppContextProvider } from '../context/app.context'
import ComponentC2 from './ComponentC2';
import ComponentC3 from './ComponentC3';

const ComponentC1 = () => {
    return (
        <div>
            <AppContextProvider>
                <ComponentC2 />
                <ComponentC3 />
            </AppContextProvider>
        </div>
    )
}

export default ComponentC1   