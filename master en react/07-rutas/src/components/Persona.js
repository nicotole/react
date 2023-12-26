import React from 'react'
import { useParams } from 'react-router-dom'
export const Persona = () => {

    const { nombre, apellido } = useParams();

  return (
    <div>
        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Pagina de persona: {nombre} {apellido} </h1>}

    </div>
  )
}
