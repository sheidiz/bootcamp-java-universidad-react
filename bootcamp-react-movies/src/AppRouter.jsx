import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserPage from "./user/page/UserPage";
import { Suspense } from "react";

export function AppRouter() {
    return (
        <Suspense fallback={<>...Cargando</>}>
            <BrowserRouter>
                <NavLink to={'/userpage'}>
                    User Page | {' '}
                </NavLink>
                <NavLink to={'/'}>
                    Otra
                </NavLink>
                <hr />
                <Routes>
                    <Route path="/" element={<>Holi</>} />
                    <Route path="/userpage" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
