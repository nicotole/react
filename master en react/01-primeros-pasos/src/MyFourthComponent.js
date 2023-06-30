import React from 'react'
import PropTypes from 'prop-types'

export const MyFourthComponent = ({nombre, apellido, ficha}) => {
    // console.log(props);
  
    return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.alergias}</li>
        </ul>
    </div>
  )
}

MyFourthComponent.propTypes = {
    nombre : PropTypes.string,
    apellido : PropTypes.string.isRequired,
    ficha : PropTypes.object
}

MyFourthComponent.defaultProps = {
    nombre : 'Juan',
    apellido : 'Martinez'
}