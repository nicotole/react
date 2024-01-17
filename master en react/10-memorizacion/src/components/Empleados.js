import React, { useEffect, useState } from 'react'

export const Empleados = ({page = 1}) => {
  
    const [empleados , setEmpleados] = useState([]);
  
  const conseguirEmpleados = async(page) => {
    const url = 'https://reqres.in/api/users?page' + page;
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();
    setEmpleados(empleados);
  }

  useEffect(()=>{
    conseguirEmpleados(page);
  }, []) //se ejecuta solo cuando se monta el componente
  
    return (
    <div>
        <p>Mostrando la pagina: {page}</p>
        <ul className='empleados'>
            {empleados.map( empleado => {
                return <li key={empleado.id}>{`${empleado.first_name} ${empleado.last_name}`}</li>
            })}
        </ul>
    </div>
  )
}

/**
 * Con React.memo logramos que el componente Empleados no se re-renderice por un renderizado
 * desencadenado por un componente que lo contenga.
 * React.memo produce que Empleado se renderice solo si cambia algo de Empleado
 * No se renderiza si lo que se cambio fue algo de fuera de él mismo
 */