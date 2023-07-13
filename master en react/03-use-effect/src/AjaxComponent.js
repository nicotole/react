import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true); //arranca en true entonces entra en el if del template
    const [error, setError] = useState("");

    //Basico para rellenar estado
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Nicolás",
                "last_name": "Toledo",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Carlos",
                "last_name": "Santana",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(final_res => {
                setUsuarios(final_res.data);//cambia el estado con useState entonces cambia la vista 
            },
            err => {
                console.log(err);
            }
        )
    }

    const getUsuariosAjaxAw = async() => {
        try{
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const {data} = await peticion.json();
            console.log("data: ");
            console.log(data);
            setUsuarios(data);
            setCargando(false);//actualizo el estado entonces entra al else en el return y muestra la data
        } catch (error){
            console.log(error);
            setError(error.mensage);
        }
    }

    useEffect( (e) => {
        //getUsuariosEstaticos();
       // getUsuariosAjaxPms();
    }, []);//se ejecuta cuando se monta el componente

    useEffect( ()=> {
        getUsuariosAjaxAw();
    }, [])

    
    if(error !== ""){
        return (
            //cuando pasa algun eror
            <div className='errores'>
                {error}
            </div>
        )
    }else if(cargando === true){
        return (
            //cuando esta todo cargando
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    }else if(cargando === false && error === ""){
        //cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return <li key={usuario.id}>{usuario.first_name}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}
