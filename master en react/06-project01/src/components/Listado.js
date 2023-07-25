import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]); //lo pasamos a App.js 
  //este estado entra como prop
  
  useEffect(() => {
    conseguirPeliculas();
  }, []);//se ejecuta al montar el componente
  
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
  }

  return (
    <>
    {/* si el estado no esta vacio, ejecutamos el mapeo */}
    {/* {listadoState.state =! null && listadoState.map( peli => { */}
    {listadoState != null ?
      listadoState.map(peli => {
        return(
          <article key={peli.id} className="peli-item">
              <h3 className="title"> {peli.titulo}</h3>
              <p className="description"> {peli.descripcion} </p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
          </article>
        );  
      })  
    : <h2>No hay peliculas para listar</h2>
    }
        
    </>
  )
}
