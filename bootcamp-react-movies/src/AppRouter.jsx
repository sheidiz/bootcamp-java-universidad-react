import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserPage from "./user/page/UserPage";
import { Suspense } from "react";
import Order from "./orders/Order";
import Mensaje from "./mensaje/ui/Menssaje";
import Navbar from "./navbar/Navbar";
import { routes } from "./navbar/routes";
import Componente1 from "./rxjs/Componente1";
import ReqResPage from "./reqres/ui/ReqResPage";
import ComponentC1 from "./pages/components/ComponentC1";
import Component1view1 from "./views/components/Component1";
import AuthGuard from "./commons/AuthGuard";
import { Account } from "./account/Account";
import Admin from "./admin/Admin";
import { Profile } from "./profile/ui/Profile";
import { Login } from "./login/ui/Login";
//lazy loading (falta)
//rxjs (OK)
//redux (OK)
//context (Hoy)}
// guards
export function AppRouter() {
    return (<>
        <Mensaje />
        <Suspense fallback={<>...Cargando..</>}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={routes.publicas.INDEX} element={<h1>Hola</h1>} />
                    <Route path={routes.publicas.USER} element={<UserPage />} />
                    <Route path={routes.publicas.HOME} element={<Order />} />
                    <Route path={routes.publicas.RXJS} element={<Componente1 />} />
                    <Route path={routes.publicas.REQ_RES} element={<ReqResPage />} />
                    <Route path={routes.publicas.CONTEXT_PAGE} element={<ComponentC1 />} />
                    <Route element={<AuthGuard />}>
                        <Route path={routes.publicas.CONTEXT_VIEW_PAGE} element={<Component1view1 />} />
                    </Route>

                    <Route path={routes.publicas.LOGIN} element={<Login />} />
                    {/* rutas privadas: usuario debe estar logueado */}
                    <Route element={<AuthGuard />}>
                        <Route path={routes.privates.ACCOUNT} element={<Account />} />
                        <Route path={routes.privates.ADMIN} element={<Admin />} />
                        <Route path={routes.privates.PROFILE} element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>
    );
}