import React, { useEffect, useState } from 'react'
import { sharedService } from './shared-service';

function Componente3() {
    const [mensaje,setMensaje] = useState('');

    let subscription$;

    useEffect(()=> {
        subscription$ = sharedService.getSubject().subscribe(
            data => {
                setMensaje((prev)=> data);
            }
        );

        //se ejecuta cuando se destruye el componente
        return () => {
            console.log('c3 destroy');
            subscription$.unsubscribe();
        }
    },[]);

    const reset = () => {
        sharedService.reset();
    }

    return (
        <>
            <h4>Componente 3</h4>
            <div>
                {mensaje}
            </div>
            <button onClick={reset}>
                Reset
            </button>
        </>
    )
}

export default Componente3