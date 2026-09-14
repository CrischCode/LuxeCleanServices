import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Topbar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<div className="p-12 text-center text-xl text-slate-600 font-semibold">Próximamente: Página de Contacto y Cotizaciones</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;