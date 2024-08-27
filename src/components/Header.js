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
            const navLinks = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('.section-body');

            setIsFixed(scrollPercentage >= 85);

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;

                navLinks.forEach((link) => {
                    const targetId = link.getAttribute('href').substring(1); // Remove '#'
                    if (targetId === section.id) {
                        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    }
                });
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`header ${isFixed ? 'fixed' : ''} ${modalState.isVisible ? 'hidden' : ''}`}>
            <div id="mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? (
                    <img src="/img/svg/mode-light.svg" alt="Light Mode" />
                ) : (
                    <img src="/img/svg/mode-dark.svg" alt="Dark Mode" />
                )}
            </div>
            <div id="header-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </div>
        </nav>
    );
}

export default Header;
