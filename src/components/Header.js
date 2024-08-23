import React, { useState, useEffect } from 'react';

function Header({ isDarkMode, toggleDarkMode }) {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            const scrollPercentage = (scrollY / (viewportHeight)) * 100;

            setIsFixed(scrollPercentage >= 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isFixed ? 'fixed' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <div id="mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <img src="/img/svg/mode-light.svg" alt="Light Mode" />
                ) : (
                    <img src="/img/svg/mode-dark.svg" alt="Dark Mode" />
                )}
            </div>
        </header>
    );
}

export default Header;
