// IMPORT =========================================================================================
import React from     'react';

import About from     './pages/About';
import Resume from    './pages/Resume';
import Skills from    './pages/Skills';
import Projects from  './pages/Projects';
import Contact from   './pages/Contact';
import Navbar from    './components/Navbar/Navbar';
import Banner from    './components/Banner/Banner';
import Footer from    './components/Footer/Footer';

import 'tailwindcss/tailwind.css';
import './App.scss';

// EXPORT =========================================================================================
export default function App() {
  return (
    <div className="relative container">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <div className="card-panel" id="containerCard">
          <Banner />
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}