import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from './routes';

function Navbar (){
    return (
        <>
            <NavLink to={'/userpage'}>
                User Page
            </NavLink> |
            <NavLink to={'/home'}>
                User Page
            </NavLink> |
            <NavLink to={'/'}>
                Home
            </NavLink> |
            <NavLink to={'/rxjs'}>
                Rxjs
            </NavLink> |
            <NavLink to={routes.publicas.REQ_RES}>
                Reqres
            </NavLink>
        </>
    )
}

export default Navbar