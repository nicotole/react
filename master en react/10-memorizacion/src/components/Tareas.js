import React, {  useState } from 'react'

export const Tareas = () => {

  const [tareas , setTareas] = useState([]);

  const guardarTareas = (e) =>{
    e.preventDefault();
    setTareas( tarea => [...tarea, e.target.descripcion.value ])
  }

  return (
    <div className='tareas-container'>
        <h1> Mis tareas </h1>
        <form onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='Descripcion' />
            <input type='submit' value='Guardar'/>
        </form>

        <h3>Lista de tareas</h3>
        <ul>
          {
            tareas.map((tarea, indice) => {
              return <li key={indice}>{tarea}</li>
            })
          }
        </ul>
    </div>
  )
}
