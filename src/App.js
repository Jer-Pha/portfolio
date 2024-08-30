import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import { ModalProvider } from './components/ModalContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    return () => window.addEventListener('scroll', () => {
      const nav = document.getElementById('nav-header');
      const contactSection = document.getElementById('contact');
      const projectsSection = document.getElementById('projects');

      if (nav && projectsSection) {
        const navBottom = nav.getBoundingClientRect().bottom;
        const contactTop = contactSection.getBoundingClientRect().top;
        const projectsTop = projectsSection.getBoundingClientRect().top;

        if (contactTop <= navBottom) {
          nav.style.backgroundColor = 'var(--background)';
        } else if (projectsTop <= navBottom) {
          nav.style.backgroundColor = 'var(--surface)';
        } else {
          nav.style.backgroundColor = 'var(--background)';
        }
      }
    });
  }, []);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ModalProvider><div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div></ModalProvider>
  );
}

export default App;
