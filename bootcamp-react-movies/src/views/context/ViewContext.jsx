import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//1 creamos contexto
export const AppContext = createContext();

//hoc: high order component
export const AppContextProvider = ({ children }) => {

    //2 usar hook useState
    const [getContextValue, setContextValue] = useState();

    return <AppContext.Provider value={{ getContextValue, setContextValue }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext debe estar dentro un AppContextProvider');
    }
    return context;
}