import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <h1>Cabecera</h1>
        <hr />

        <nav>
          <ul>
            <li>
              <NavLink 
                to="/inicio"
                className={ ({isActive}) => isActive ? "Activado" : "" }
              >Inicio</NavLink> {/* Navega a Inicio*/}

            </li>
            <li>
              <NavLink 
                to="/contacto"
                className={ ({isActive}) => isActive ? "Activado" : "" }
              >Contacto</NavLink>
            </li>
            <li>
              <NavLink 
                to="/articulos"
                className={ ({isActive}) => isActive ? "Activado" : "" }
              >Articulo</NavLink>
            </li>
            <li>
              <NavLink 
                to="/panel"
                className={ ({isActive}) => isActive ? "Activado" : "" }
              >Panel de control</NavLink>
            </li>
          </ul>
        </nav>
        
        <hr />

        <Routes>{/* El componente Routes, renderiza un elemento segun la ruta escrita en el navegador */}
            <Route path="/" element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="articulos" element={<Articulos />} />
            <Route path="/persona/:nombre" element={<Persona/>} />
            <Route path="/persona/:nombre/:apellido" element={<Persona/>} />
            <Route path="/persona" element={<Persona/>} />
            <Route path={"/redirigir"} element={<Navigate to="/Persona/Nico/Toledo" />} /> 

            <Route path="/panel/*" element={<PanelControl /> } >
              <Route path="inicio" element={<InicioPanel /> } />
              <Route path="crear-articulos" element={<Crear/>} />
              <Route path="gestion-usuarios" element={<Gestion/>} />
              <Route path="acerca-de" element={<Acerca /> } />
            </Route>

            <Route path="*" element={<Error />} />  
        </Routes>

        <hr />
        <h2>Footer</h2>
    </BrowserRouter>
  )
}
