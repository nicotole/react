import React from 'react'

export const Crear = () => {
  return (
    <div className="add">
            <h3 className="title"> Añadir Pelicula</h3>
            <form>
                <input type="text" aria-placeholder="Titulo" />
                <textarea placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
    </div>
  )
}
