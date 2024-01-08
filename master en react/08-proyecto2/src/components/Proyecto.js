import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../Data/trabajos'
// import from 

export const Proyecto = () => {
  
  const[proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(()=>{
    

    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);//retorna un array con el objeto filtrado
    setProyecto(proyecto[0]);//cargo el estado con el objeto filtrado, queda como fuera del array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //se carga cuando se carga el componente. una sola vez.

  return (
    <div className='page page-work'>
      
      <div>
        <img src={'/images/' + proyecto.id + 'npg'} alt='Imgen del proyecto'/>
      </div>
      <h1 className='heading'> {proyecto.nombre} </h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.tecnologias}</p>
      <a href={'https://' + proyecto.url} target='_blank' rel="noopener noreferrer" > Ir al proyecto </a>
    </div>
  )
}