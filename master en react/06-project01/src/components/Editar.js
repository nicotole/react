import React from 'react'

export const Editar = () => {
    const titulo_componenete = "Editar Pelicula";


  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componenete}</h3>
        <form>
            <input type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue="Titulo original de la pelicula"
            />
            <textarea
                name="descripcion"
                defaulValue="Descripcion original"
                className="descripcion_editada"
            />
            <input type='submit' className='editar' value="Actualizar" />
     
        </form>
    </div>
  )
}
