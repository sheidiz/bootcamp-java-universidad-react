import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [getContextValue,setContextValue] = useState('vacio');
    return <AppContext.Provider value={{getContextValue,setContextValue}}>
        {children}
    </AppContext.Provider>
}

//
export const useAppContext = () => {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
}