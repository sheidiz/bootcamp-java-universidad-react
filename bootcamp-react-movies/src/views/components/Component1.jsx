import React, { useEffect } from 'react'
import { AppContextProvider } from '../context/ViewContext'
import ComponentView2 from './Component2'
import ComponentView3 from './Component3'
import { useNavigate } from 'react-router-dom'

const Component1view1 = () => {
    const history = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            // history('/home');
        }, 2000);
    }, []);

    return (
        <div>
            <AppContextProvider>
                <ComponentView2 />
                <ComponentView3 />
            </AppContextProvider>
        </div>
    )
}

export default Component1view1