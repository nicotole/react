import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componenete = "Editar Pelicula";

    const guardarEdicion = (e , id) => {
      e.preventDefault();

      //conseguir el target / conseguir el formulario
      let target = e.target;

      //buscar el indice del objeto de la pelicula a actualizar
      const pelis_almacenadas = conseguirPeliculas();
      const indice = pelis_almacenadas.findIndex(peli => peli.id === id); 

      //crear objeto con ese indice, con titulo y descripcion del formulario 
      let peli_actualizada = {
        id,
        titulo : target.titulo.value,
        descripcion : target.descripcion.value
      }

      //actualizar el elemento con ese indice
      pelis_almacenadas[indice] = peli_actualizada;

      //guardar el nuevo array en el localstorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
      //actualizar estados
      setListadoState(pelis_almacenadas);
      setEditar(0); 

    }

  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componenete}</h3>
        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={peli.titulo}
            />
            <textarea
                name="descripcion"
                defaulValue={peli.descripcion}
                className="descripcion_editada"
            />
            <input type='submit' className='editar' value="Actualizar" />
     
        </form>
    </div>
  )
}
