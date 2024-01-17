import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [ nombre , setNombre] = useState("");
    const [ page, setPage] = useState(1);
    
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
        <button onClick={ () => {setPage(1)}}>Pagina 1</button>
        <button onClick={() => {setPage(2)}}>Pagina 2</button>
        <Empleados page={page}/>
    </div>
  )
}
