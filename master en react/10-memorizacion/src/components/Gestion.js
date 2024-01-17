import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [ nombre , setNombre] = useState("");

    const gestorInput = useRef(); //referencia al input

    const asignarGestor = (e) => {
        console.log(gestorInput.current.value)
        setNombre(gestorInput.current.value);

    }

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='Introduce Nombre'></input>
        <h2>Listado de empleados:</h2>
        <p>Los usuarios vienen de jsonplaceholder</p>
        <Empleados />
    </div>
  )
}
