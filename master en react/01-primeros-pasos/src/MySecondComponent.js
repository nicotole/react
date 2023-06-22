import React from 'react'

    const nombre = 'Nico';
    const apellido = 'Toledo';
    let usuario = {
        nombre: 'Nicolas',
        apellido: 'Toledo',
        edad: 24
    }


const MySecondComponent = () => {
    return (
        <div className='MyComponent'>
            <hr/>
            <h3>Segundo componente</h3>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>apellido: {apellido}</li>
            </ul>
            <h3>Datos del usuario JSON</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Edad: {usuario.edad}</li>
            </ul>
        </div>
    
    );
};

export default MySecondComponent;