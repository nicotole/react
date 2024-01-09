import React, { useRef } from 'react'

export const Formulario = () => {
  
    const nombre = useRef(); //toma el elemento completo donde esta la ref del mismo nombre
    const apellido = useRef();
    const email = useRef();
    const miCaja = useRef();


    const mostrar = e => {
        e.preventDefault();

        console.log(nombre.current.value);//para obtener el valor debe accederse así

        //mi caja
        console.log(miCaja);
        // miCaja.current.classList.add('fondo-verde'); podemos hacer asi o como en las prox 2 lineas
        let { current: caja } = miCaja; //desestructuramos asi podemos llamar "caja" en lugar de miCaja.current
        caja.classList.add('fondoVerde');
        caja.innerHTML = 'fomulario enviado'
    }

  return (
    <div>
        <h1>Formulario</h1>

        <div className='mi-caja' ref={miCaja}>
            <h2>Pruebas con useRef</h2>
        </div>

        <form onSubmit={mostrar}>
            <input type='text' placeholder='nombre' ref={nombre} /><br/> {/*su ref es nombre */}
            <input type='text' placeholder='Apellidos' ref={apellido} /><br/>
            <input type='email' placeholder='correo electronico' ref={email} /><br/>
            <input type='submit' value='Enviar' /><br/>
        </form>

        <button onClick={ () => nombre.current.select() }> Empezar a rellenar form</button> {/* le pone borde azul al campo de nombre del fomrulario */}
    </div>
  )
}
