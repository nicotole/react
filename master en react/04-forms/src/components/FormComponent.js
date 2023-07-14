import React, { useState } from 'react'

export const FormComponent = () => {

  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = e => {
    e.preventDefault()//de este modo la pagina no se reinicia al hacer el envio del formulario
    let datos = e.target;
    console.log(datos);
    //console.log("nombre: " + datos.nombre.value);
    
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero:datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value
    }
    
    console.log(usuario);

    setUsuario(usuario)
  }

  const cambiarDatos = e =>{
    console.log(e.target.name);
    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario;//copia del usuario
    // usuario_para_modificar[name_del_input] = e.target.value;

    setUsuario(estado_previo => ({
        ...estado_previo,
        [name_del_input]: e.target.value
      })
    );


    setUsuario(usuario_para_modificar);

  }

  return (
    <div>
        <h1>Formularios en React</h1>

        {usuario.enviar &&
          (
            <div className='info_usuario label label-gray'>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero}
              y su Biografia es: <p>{usuario.bio}</p>
            </div>
          )
        }
        
        <form onSubmit={conseguirDatosFormulario}>
            <input type="text" 
                  placeholder='Nombre'
                  name='nombre'
                  onChange = {cambiarDatos}
                  ></input>
            <input type="text" 
                   placeholder='Apellido'
                   name='apellido'
                   onChange = {cambiarDatos}
                   ></input>
            <select name='genero'>
                <option value='hombre'>Hombre</option>
                <option vallue='mujer'>Mujer</option>
            </select>
            <textarea name='bio'placeholder='Biografia...'
              onChange = {cambiarDatos}
            ></textarea>
            <input type="submit" value="Enviar" name="enviar" />
        </form>

       
    </div>
  )
}
