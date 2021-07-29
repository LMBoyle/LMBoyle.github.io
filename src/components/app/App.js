// IMPORT =========================================================================================
import React from     'react';
import Navbar from    '../sections/Navbar';
import Banner from    '../sections/Banner'
import About from     '../sections/About';
import Resume from    '../sections/Resume';
import Skills from    '../sections/Skills';
import Projects from  '../sections/Projects';
import Contact from   '../sections/Contact';
import Footer from    '../sections/Footer';

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