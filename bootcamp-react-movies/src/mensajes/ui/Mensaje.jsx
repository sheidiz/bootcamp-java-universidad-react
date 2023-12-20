import { useDispatch, useSelector } from "react-redux"
import { resetMensajes } from "../../redux/mensajes/mensajes";

function Mensaje() {
    const dispatcher = useDispatch();

    const mensajeState = useSelector(store => store.mensajes);

    const limpiar = () => {
        dispatcher(resetMensajes())
    }

    return (
        <>
            {mensajeState?.msj &&
                <div>
                    <span>
                        {mensajeState?.msj}
                    </span>
                    <button onClick={limpiar}>
                        (X)
                    </button>
                </div>
            }
        </>
    )
}

export default Mensaje