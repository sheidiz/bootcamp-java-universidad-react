import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserPage from "./user/page/UserPage";
import { Suspense } from "react";
import Order from "./orders/Order";
import Mensaje from "./mensaje/ui/Menssaje";
import Navbar from "./navbar/Navbar";
import { routes } from "./navbar/routes";
import Componente1 from "./rxjs/Componente1";
import ReqResPage from "./reqres/ui/ReqResPage";
//lazy loading
//rxjs
//context
export function AppRouter () {
    return (<>
        <Mensaje/>
        <Suspense fallback={<>...Cargando..</>}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={routes.publicas.INDEX} element={<h1>Hola</h1>}/>
                    <Route path={routes.publicas.USER} element={<UserPage/>}/>
                    <Route path={routes.publicas.HOME} element={<Order/>}/>
                    <Route path={routes.publicas.RXJS} element={<Componente1/>}/>
                    <Route path={routes.publicas.REQ_RES} element={<ReqResPage/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>
    );
}