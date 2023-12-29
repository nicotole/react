import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    
    <header className='header'>
        <div className="logo">
            <span>
                DEV
            </span>
            <h3>Nicolás Toledo</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" :""}>Portafolio</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" :""}>Servicios</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" :""}>Curriculum</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" :""}>Contacto</NavLink>
                </li>
            </ul>
            

        </nav>
    </header>
  )
}
