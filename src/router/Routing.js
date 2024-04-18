import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

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
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<h1 className='heading'>Error 404</h1>} />
            </Routes>
        </section>    

        {/* Footer */}
        <Footer />
    </BrowserRouter>
  )
}
