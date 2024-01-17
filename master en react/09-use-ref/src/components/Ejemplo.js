import React, { useEffect, useState, useRef } from 'react'

export const Ejemplo = () => {
  
    const [ numeroSaludo, setNumeroSaludo ] = useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    /**La referencia funciona como un puntero directo a esa variable.
     * saludosEnCola.current = numeroSaludo; le digo que saludosEnCola.current referencie a numeroSaludo
     * como es una referencia directa toma el ultimo valor
     */

    useEffect(() => {
      saludosEnCola.current = numeroSaludo; //toma el ultimo valor de numeroSaludo
      setTimeout( () => {
        console.log(`Mensajes en cola: ${saludosEnCola.current}`)
      }, 2000);
    }, [numeroSaludo]);

    /*
    En este caso, la variable local currentNumber se establece al valor de numeroSaludo 
    en el momento del llamado al useEffect(cuando cambie numeroSaludo). 
    La función de setTimeout cerrará sobre este valor específico, 
    y cuando se imprima el mensaje en la consola después de 2000 milisegundos,
    se mostrará el valor que tenía numeroSaludo al momento del llamdo, 
    cuando cambio numeroSaludo en ese especifico momento.
    Esto significa que podría no reflejar el valor más reciente
    de numeroSaludo si ha cambiado durante el tiempo de espera de 2000 milisegundos.

    useEffect(() => {
      let currentNumber = numeroSaludo;
      setTimeout( () => {
        console.log(`Mensajes en cola: ${currentNumber}`)
      }, 2000);
    }, [numeroSaludo]);
    */
    
    const enviarSaludo = () =>{
      setNumeroSaludo( numeroSaludo + 1 );
    } 
    

  return (
    
    <div>
        <h1>EJemplo useRef</h1>
        <h2>Saludos enviados: { numeroSaludo }</h2>
        <button onClick={ enviarSaludo }>Enviar Saludo!</button>
    </div>
  )
}
