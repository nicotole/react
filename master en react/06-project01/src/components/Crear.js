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

    //guardar estado
    setPeliState(peli);

    //guardar en almacenamiento local
    
    guardarEnEstorage(peli);

  }

  const guardarEnEstorage = peli =>{
    //conseguir elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem('pelis'));
    
    //comprobar que sea un array
    if(Array.isArray(elementos)){
      elementos.push(peli);
    }else{
      elementos = [peli];
    }

    //guardar en el localStorage
    localStorage.setItem('pelis', JSON.stringify(peli));
   
    //devolver objeto guardado
    return peli;
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
