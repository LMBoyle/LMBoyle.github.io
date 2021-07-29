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

import './styles/scss/reset.scss';
import './App.scss';

// EXPORT =========================================================================================
export default function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <div class="container">
        <div class="card-panel" id="containerCard">
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}