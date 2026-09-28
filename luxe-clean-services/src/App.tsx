import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import {ContactPage} from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return ( 
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans">
        <Topbar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;