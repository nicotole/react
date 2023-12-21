import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [ busqueda, setBusquedaState] = useState('');

  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusquedaState(e.target.value);
    console.log(busqueda)
    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    //Comprobar si hay resultado
    if(busqueda.length <=1 ){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
    }
    //Actualizar estado del listado principal con lo que he logrado filtrar
    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            <form>
                <input type='text'
                        name='busqueda'
                        autoComplete='off'
                        // value={busqueda}
                        onChange={ buscarPeli }
                />
                <button> Buscar </button>
            </form>
    </div>
  )
}
