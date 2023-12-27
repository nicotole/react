import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel De Control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/crear-articulos">Crear Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/gestion-usuarios">Gestion Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/acerca-de">Acerca-de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            < Outlet /> 
            {/* outlet muestra el elemento renderizado segun la ruta de estos navlink */}
        </div>
    </div>
  )
}
