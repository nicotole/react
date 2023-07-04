import React from 'react'

export const MyEventsComponent = () => {

    const hasDadoClick = () => {
        console.log("Le diste click al boton");
    }

    const hasDadoDobleClick = (e, nombre) => {
        console.log("Has dado doble click" + nombre);
    }

    const hasEntrado = () => {
      console.log("ENTRASTE AL DIV!");
    }

    const hasSalido = () => {
      console.log("SALISTE DEL DIV");
    }

    const hasPasado = (e, accion) => {
      console.log(`Has ${accion} a la caja conn el mouse!` );
    }

    const estasDentro = () =>{
      console.log("Estas dentro del input");
    }

    const estasFuera = () =>{
      console.log("Estas fuera del input");
    }

  return (
    <div>
        <h1>Eventos React</h1>
        <button onClick={hasDadoClick}> Clickeame! </button>
        <button onDoubleClick={ e => hasDadoDobleClick(e, 'Nicolas')}>Clickeame x2 </button>

        <div id='caja'
          onMouseEnter={ hasEntrado }
          onMouseLeave={ hasSalido }
        >
          Pasa por encima!!
        </div>

        <div id='caja'
          onMouseEnter={ e => hasPasado(e, 'entrado') }
          onMouseLeave={ e => hasPasado(e, 'salido')}  
        >
          Pasa por encima solucion diferente!!
        </div>

        <input type="text" 
          onFocus= { estasDentro }
          onBlur = { estasFuera }
          placeholder='Introduce tu nombre'
        ></input> 
         
    </div>
  )
}
