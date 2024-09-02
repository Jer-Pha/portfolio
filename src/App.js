import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import { ModalProvider } from './components/ModalContext';

import { adjustVh } from './utils/adjustVh';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    adjustVh(); // Call initially on mount
    window.addEventListener('resize', adjustVh);
    return () => {
      window.removeEventListener('resize', adjustVh);
    };
  }, []);

  return (
    <ModalProvider><div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div></ModalProvider>
  );
}

export default App;
