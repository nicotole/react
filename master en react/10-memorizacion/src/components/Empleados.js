import React from 'react'

export const Empleados = React.memo(() => {
  return (
    <div>
        Empleados   
    </div>
  )
})

/**
 * Con React.memo logramos que el componente Empleados no se re-renderice por un renderizado
 * desencadenado por un componente que lo contenga.
 * React.memo produce que Empleado se renderice solo si cambia algo de Empleado
 * No se renderiza si lo que se cambio fue algo de fuera de él mismo
 */