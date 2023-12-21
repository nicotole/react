import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio'
import { Contacto } from '../components/Contacto'
import { Articulos } from '../components/Articulos'
import { Error } from '../components/Error';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <h1>Cabecera</h1>
        <hr />

        <nav>
          <ul>
            <li>
              <NavLink to="/inicio">Inicio</NavLink> {/* Navega a Inicio*/}
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulo</NavLink>
            </li>
          </ul>
        </nav>
        
        <hr />

        <Routes>{/* El componente Routes, renderiza un elemento segun la ruta escrita en el navegador */}
            <Route path="/" element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="articulos" element={<Articulos />} />
            <Route path="*" element={<Error />} />  
        </Routes>

        <hr />
        <h2>Footer</h2>
    </BrowserRouter>
  )
}
