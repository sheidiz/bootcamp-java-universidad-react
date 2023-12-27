import React, { useEffect, useState } from 'react'
import { sharedService } from './shared-service';

function Componente2() {
    const [mensaje,setMensaje] = useState('');

    let subscription$;

    useEffect(()=> {
        subscription$ = sharedService.getSubject().subscribe(
            data => {
                //console.log(`mensaje recibido: ${data}`)
                setMensaje((prev)=> data);
            }
        );

        //se ejecuta cuando se destruye el componente
        return () => {
            console.log('c2 destroy')
            subscription$.unsubscribe();
        }
    },[]);

    return (
        <>
            <h4>Componente 2</h4>
            <div>
                {mensaje}
            </div>
        </>
    )
}

export default Componente2