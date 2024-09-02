import React, { useState, useEffect, useContext } from 'react';
import ModalContext from './ModalContext';
import { DarkModeIcon, LightModeIcon } from './Icons';

function Header({ isDarkMode, toggleDarkMode }) {
    const [isFixed, setIsFixed] = useState(false);
    const { modalState } = useContext(ModalContext);

    const handleContactClick = (event) => {
        event.preventDefault(); // Prevent default jump behavior
        const homeSection = document.getElementById('footer');
        homeSection.scrollIntoView({ behavior: 'smooth' });
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
        <nav id="nav-header" className={`header ${isFixed ? 'fixed' : ''} ${modalState.isVisible ? 'hidden' : ''}`}>
            <div className="mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <LightModeIcon alt="Light Mode" />
                ) : (
                    <DarkModeIcon alt="Dark Mode" />
                )}
            </div>
            <div className="header-links">
                <div id="about-link">About</div>
                <div id="projects-link">Projects</div>
                <div onClick={handleContactClick}>Contact</div>
            </div>
        </nav>
    );
}

export default Header;
