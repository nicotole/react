import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1> Contacto </h1>

      <form className='contact'>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellido' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Motivo de contacto' />
        <input type='submit' value='Enviar'/>
      </form>
    </div>
  )
}
