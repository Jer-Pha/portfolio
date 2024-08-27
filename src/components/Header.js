import React, { useState, useEffect, useContext } from 'react';
import ModalContext from './ModalContext';

function Header({ isDarkMode, toggleDarkMode }) {
    const [isFixed, setIsFixed] = useState(false);
    const { modalState } = useContext(ModalContext);

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
                    <img src="/img/svg/mode-light.svg" alt="Light Mode" />
                ) : (
                    <img src="/img/svg/mode-dark.svg" alt="Dark Mode" />
                )}
            </div>
            <div className="header-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </div>
        </nav>
    );
}

export default Header;
