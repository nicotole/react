import React from 'react'
import { Routes, Route, BrowserRouter, Navlink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Servicios } from '../components/Servicios'
import { Contacto } from '../components/Contacto'
import { Portafolio } from '../components/Portafolio'
import { Curriculum } from '../components/Curriculum'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Header y navegacion */}
        <HeaderNav />
        {/* contenido central */}
        <section className="content">
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/portafolio" element={<Portafolio />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="*" element={<Inicio />} />
          </Routes>
        </section>

        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}
