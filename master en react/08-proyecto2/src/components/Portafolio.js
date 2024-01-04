import React from 'react'
import { trabajos } from '../Data/trabajos' 

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
    <section className='works'>
    {
      trabajos.map(trabajo=> (
        <article key={trabajo.id} className='work-item'>
          <div className='mask'>
            <img src={'/images/' + trabajo.id + '.png'} />          </div>
          <span>{trabajo.categorias}</span>
          <h2>
            {trabajo.nombre}
          </h2>
          <h3>{trabajo.tecnologias}</h3>
        </article>
      ))
    }
    </section>
    </div>
  )
}
