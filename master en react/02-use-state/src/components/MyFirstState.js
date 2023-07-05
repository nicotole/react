import React, {useState} from 'react'

export const MyFirstState = () => {
    /*
    //Problematica

    let nombre = "Nicolás Toledo";
    
    const cambiarNombre = (e) => {
        nombre = 'Paquito Fernandez';
    }
    */

    const [ nombre, setNombre ] = useState('Nicolas Toledo'); //el estado por defecto

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick = { e => cambiarNombre(e, 'Paquito Fernandez') } >
            cambiar nombre por Paquito Fernandez!
        </button>
        &nbsp;
        <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value ) } placeholder='Cambia el Nombre' ></input>
    </div>
  )
}
