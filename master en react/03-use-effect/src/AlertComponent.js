import React, { useEffect } from 'react'

export const AlertComponent = () => {

    useEffect(() => {
        //el mensaje se muestra cuando se cargue en pantalla el componente
        console.log("El componente AlertComponent esta montado!!")

        return () => {
            //el return se ejecuta cuando el componente se desmonta
            console.log("El componente AlertComponent esta desmontado")
        }

    }, []);//se ejecuta una vez porque le paso el array vacio, cuando se carga en la vista


  return (
    <div>
        <h3>Hola Nico!!</h3>
        <button onClick={ e => {
            alert("Bienvenido!!");
        }

        }>Mostrar Alerta</button>
    </div>
  )
}
