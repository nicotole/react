import React, { useState } from 'react'

export const Crear = () => {

  const tituloComponente = "Añadir pelicula";
  
  const [peliState , setPeliState ] = useState({
    titulo : '',
    descripcion : ''
  }); 

  const { titulo, descripcion } = peliState;//desestructuracion de objetos

  const conseguirDatosForm = e => {
    e.preventDefault();//se evita el funcionamiento por defecto del  formulario, se evita que se refresque la pagina al enviar
    alert("formulario enviado");

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    //crear peli

    let peli = {
      id : Date().getTime(), //id unico autogenerado
      titulo, // equivalente a titulo : titulo
      descripcion 
    }

    setPeliState(peli);
  }

  return (
    <div className="add">
            <h3 className="title"> {tituloComponente} </h3>

            <strong>
              {/* Si existe titulo y descripcion, se muestra el mensaje y el titulo */}
              {(titulo && descripcion ) && "Has creado a pelicula: " + titulo } 
            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input 
                  type="text"
                  id="titulo"
                  name="titulo" 
                  aria-placeholder="Titulo"
                  
                />

                <textarea 
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripción">

                </textarea>

                <input 
                  type="submit"
                  value="Guardar"
                
                />
            </form>
    </div>
  )
}
