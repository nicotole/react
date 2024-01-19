import React, {  useState } from 'react'

export const Tareas = () => {

  const [tareas , setTareas] = useState([]);

  const guardarTareas = (e) =>{
    e.preventDefault();
    setTareas( tarea => [...tarea, e.target.descripcion.value ])
  }

  const borrarTarea = (id) => {
    //filtrar tareas para borrar la que no quiero
    let nuevas_tareas = tareas.filter( (tarea, indice) => indice !== id); //filtrar = quitar
    //guardar el nuevo listado en el estado
    setTareas(nuevas_tareas);
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
              return (
                <li key={indice}>
                  {tarea}
                  <button onClick={() => borrarTarea(indice)}>x</button>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}
