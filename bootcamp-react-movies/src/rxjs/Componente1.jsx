import React, { useEffect, useState } from 'react'
import Componente2 from './Componente2'
import { sharedService } from './shared-service';
import Componente3 from './Componente3';

function Componente1() {
    const [mensaje,setMensaje] = useState('');

    // useRef : investigar por mi cuenta!!!

    const enviarMensaje = () => {
        //emito mensaje
        if(mensaje.length === 0) return;
        sharedService.next(mensaje);
    }
    /*
    useEffect(()=>{
        console.log(mensaje);
    },[mensaje]);
    */
    return (
        <>
            <input value={mensaje} onChange={(e)=>setMensaje(e.target.value)}/>
            <button onClick={enviarMensaje}>
                Enviar Mensaje
            </button>

            <hr />
            <Componente2 />
            <Componente3 />
        </>
    )
}

export default Componente1