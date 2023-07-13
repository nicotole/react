import React, { useEffect, useState } from 'react'
import { AlertComponent } from './AlertComponent';

export const PuebasComponent = () => {

    const [ usuario , setUsuario ] = useState('Nicolás Toledo');
    const [ fecha, setFecha ] = useState('18-09-1998');
    const [ contador, setContador ] = useState(0);

    const modUsuario = e =>{
        setUsuario(e.target.value);
    }

    const cambiarFecha = e =>{
        setFecha(Date.now());
    }

    //sin el parametro de corchetes se ejecuta cuando se carga o se cambia el estado del componente
    useEffect(() => {
        //console.log("se cargo o hubo un cambio en el estado de Pruebas Component!!!")
    });


    //con los corchetes se ejecuta solo al cargar el componente
    useEffect(() => {
        console.log("se cargo Pruebas Component!!!")
    }, []);

    //se ejecutara cuando modifique la propiedad usuario
    useEffect(() => {
        console.log("se modifico Usuario: " + contador)
        setContador(contador+1);
    }, [usuario]);


  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={ contador >= 10 ? 'label label-green' : 'label'}> {usuario} </strong>
        <strong>{fecha}</strong>
        <div>
            <input type="text" 
                onChange= { modUsuario } 
                placeholder='Cambia el nombre'
            />

            <button onClick={ cambiarFecha }>Cambiar a fecha actual</button>

        </div>
        
        {/* { contador >= 20 && 'Hemos superado el 20 en el contador '} */}
        { usuario === "Nico" && <AlertComponent />}
    </div>
  )
}
