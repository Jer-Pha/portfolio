import './App.css';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { ModalProvider } from './components/ModalContext';
import LightSource from './components/LightSource';
import useShadowSkew from './components/useShadowSkew';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useShadowSkew();

  return (
    <ModalProvider><div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <LightSource />
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      {/* <AboutMe /> */}
      <Projects />
      <Footer />
    </div></ModalProvider>
  );
}

export default App;
