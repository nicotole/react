import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Nicolás Toledo</strong> y soy desarrollador en Argentina,
        y ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
      </h1>
      <h2 className='heading'>
        Te ayudo a crear tu sitio o aplicacion web, tener mas visibilidad 
        y relevancia en internet.
        <Link to="/contacto">contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className='works'>
          
        </div>
      </section>
    </div>

  )
}
