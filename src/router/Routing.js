import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { About } from '../components/About';
import { Work } from '../components/Work';

export const Routing = () => {
  return (
    <BrowserRouter>
        {/* Navigation and Header */}
        <HeaderNav />
        
        {/* Content */}
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="work" element={<Work />} />
            </Routes>
        </section>    

        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}
