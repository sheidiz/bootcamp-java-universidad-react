import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserPage from "./user/page/UserPage";
import { Suspense } from "react";
import Order from "./orders/Order";
import Mensaje from "./mensaje/ui/Menssaje";
//lazy loading
//rxjs
//context
export function AppRouter () {
    return (<>
        <Mensaje/>
        <Suspense fallback={<>...Cargando..</>}>
            <BrowserRouter>
                <NavLink to={'/userpage'}>
                    User Page
                </NavLink> |
                <NavLink to={'/home'}>
                    User Page
                </NavLink> |
                <NavLink to={'/'}>
                    Home
                </NavLink> 
                <hr/>
                <Routes>
                    <Route path="/" element={<h1>Hola</h1>}/>
                    <Route path="/userpage" element={<UserPage/>}/>
                    <Route path="/home" element={<Order/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>
    );
}