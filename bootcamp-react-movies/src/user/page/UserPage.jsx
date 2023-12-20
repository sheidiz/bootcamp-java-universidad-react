import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, modifyUser, resetUser } from '../../redux/users/user';
import { modifyMensajes } from '../../redux/mensajes/mensajes';

function UserPage() {

    //1 importamos el dispatcher
    const dispatcher = useDispatch();
    const userState = useSelector(store => store.users);

    const crearUsuario = () => {
        //view > dispach > action
        dispatcher(createUser({
            name: 'carlos',
            email: 'carlos@mail.com'
        }));

        dispatcher(modifyMensajes({
            msj: 'Usuario Creado',
        }));
    }
    const modificarUsuario = () => {
        dispatcher(modifyUser({
            name: 'juan'
        }));
        dispatcher(modifyMensajes({
            msj: 'Usuario Modificado',
        }));
    }
    const reiniciarUsuario = () => {
        dispatcher(resetUser());
        dispatcher(modifyMensajes({
            msj: 'Usuario Reiniciado',
        }));
    }

    return (
        <>
            {
                JSON.stringify(userState)
            }
            <hr />
            <button onClick={crearUsuario}>
                Crear User
            </button>
            <hr />
            <button onClick={modificarUsuario}>
                Modify User
            </button>
            <hr />
            <button onClick={reiniciarUsuario}>
                Reset User
            </button>
        </>
    )
}
export default UserPage;