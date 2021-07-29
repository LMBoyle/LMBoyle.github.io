// IMPORT =========================================================================================
import React from 'react';
import Navbar from '../Navbar'
import About from '../About'
import Resume from '../Resume'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

// EXPORT =========================================================================================
export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}