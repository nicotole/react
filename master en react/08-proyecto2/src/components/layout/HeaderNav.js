import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    
    <header>
        <div className="logo">
            <span>
                DEV
            </span>
            <h3>Nicolás Toledo</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/servicios">Servicios</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/curriculum">Curriculum</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>

        </nav>
    </header>
  )
}
