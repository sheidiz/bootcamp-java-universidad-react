import { useDispatch, useSelector } from 'react-redux';
import { createUser, modifyUser, resetUser } from '../../redux/users/user';
import { modifyMensajes } from '../../redux/mensajes/mensajes';

function UserPage() {

    //1 importamos el dispathcer
    const dispathcer = useDispatch();
    const userState = useSelector(store => store.users);

    const crearUsuario = () => {
        //view > dispath > action
        dispathcer(createUser({
            name: 'carlos',
            email: 'carlos@mail.com'
        }));

        dispathcer(modifyMensajes({
            msj: 'Usuario Creado',
        }));
    }

    const modificarUsuario = () => {
        dispathcer(
            modifyUser(
                {
                    name: 'juan'
                }
            )
        );

        dispathcer(modifyMensajes({
            msj: 'Usuario Modificado',
        }));
    }

    const reiniciarUsuario = () => {
        dispathcer(resetUser());
        dispathcer(modifyMensajes({
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
/*formatear codigo: alt+shift+f */

export default UserPage;