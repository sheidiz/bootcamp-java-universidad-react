import { useEffect } from "react";

export function UserDetails({ user } = props) {
    useEffect(() => {
        return () => {
            console.log('cuando se destruye el componente');
        }//funcion que se ejecuta cuando se destruye el componente
    }, []);

    return (
        <>
            <label>Name:</label> {user.name}
            <hr />
            <label>Last Name:</label> {user.lastName}
            <hr />
            <label>Email:</label> {user.email}
            <hr />
            <label>Avatar:</label>
            <hr />
            <img src={user.avatar} />
        </>
    );
}