import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';


export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]); //lo pasamos a App.js 
  //este estado entra como prop
  const [editar , setEditar ] = useState(0)
  
  useEffect(() => {
    conseguirPeliculas();
  },[]);//se ejecuta al montar el componente 
  
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  }

  const borrarPeli = ( id ) => {
    //conseguir peliculas almacenadas en cache
    let pelis_almacenadas = conseguirPeliculas();
    //filtrar esas peliculas paraque elimine del array la que no quiero
    let nuevo_listado_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    //actualizar listadoState
    setListadoState(nuevo_listado_peliculas);
    //actualizar datos de localStorage (cache)
    localStorage.setItem('pelis', JSON.stringify(nuevo_listado_peliculas));
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
              <button className="edit" onClick={ () => ( setEditar(peli.id))}>Editar</button>
              <button className="delete" onClick={ () => borrarPeli(peli.id) }>Borrar</button>
              
              {/* se carga el cormulario al clickear en editar */}
              {peli.id === editar && (
                  <Editar />
                )
              }
          </article>
        );  
      })  
    : <h2>No hay peliculas para listar</h2>
    }
        
    </>
  )
}
