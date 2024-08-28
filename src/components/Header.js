import React, { useState, useEffect, useContext } from 'react';
import ModalContext from './ModalContext';
import { DarkModeIcon, LightModeIcon } from './Icons';

function Header({ isDarkMode, toggleDarkMode }) {
    const [isFixed, setIsFixed] = useState(false);
    const { modalState } = useContext(ModalContext);

    const handleHomeClick = (event) => {
        event.preventDefault(); // Prevent default jump behavior
        const homeSection = document.getElementById('home');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    };
    const handleProjectsClick = (event) => {
        event.preventDefault();
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollPercentage = (scrollY / (viewportHeight)) * 100;
            setIsFixed(scrollPercentage >= 85);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navHeader" className={`header ${isFixed ? 'fixed' : ''} ${modalState.isVisible ? 'hidden' : ''}`}>
            <div className="mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <LightModeIcon alt="Light Mode" />
                ) : (
                    <DarkModeIcon alt="Dark Mode" />
                )}
            </div>
            <div className="header-links">
                <a href="#" onClick={handleHomeClick}>Home</a>
                <a href="#" id="about-link">About</a>
                <a href="#" onClick={handleProjectsClick}>Projects</a>
            </div>
        </nav>
    );
}

export default Header;
