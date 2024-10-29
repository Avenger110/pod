import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home.js';
import About from './component/About.js';
import Services from './component/Services.js';
import Contact from './component/Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
