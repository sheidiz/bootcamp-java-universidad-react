import { createContext, useContext, useState } from "react";

//1 creamos contexto
export const AppContext = createContext();

//2 hoc: hight order component
export const AppContextProvider = ({ children }) => {

    // 3 usar hook useState
    const [getContextValue, setContextValue] = useState('valor inicial de contexto');

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