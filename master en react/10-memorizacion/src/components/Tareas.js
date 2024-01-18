import React from 'react'

export const Tareas = () => {
  return (
    <div className='tareas-container'>
        <h1> Mis tareas </h1>
        <form>
            <input type='text' placeholder='Descripcion' />
            <input type='submit' value='Guardar'/>
        </form>
    </div>
  )
}
