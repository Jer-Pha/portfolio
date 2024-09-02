import React, { useState, useEffect, useRef, useContext } from 'react';
import ModalContext from './ModalContext';
import { DarkModeIcon, LightModeIcon } from './Icons';

function Header(props) {
    const navRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const { modalState } = useContext(ModalContext);
    const [isSurfaceBg, setIsSurfaceBg] = useState(false);
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

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

            const nav = navRef.current;
            const contactSection = document.getElementById('contact');
            const projectsSection = document.getElementById('projects');

            if (nav && projectsSection) {
                const navBottom = nav.getBoundingClientRect().bottom;
                const contactTop = contactSection.getBoundingClientRect().top;
                const projectsTop = projectsSection.getBoundingClientRect().top;

                if (contactTop <= navBottom) {
                    setActiveLinkIndex(2);
                    setIsSurfaceBg(false);
                } else if (projectsTop <= navBottom) {
                    setActiveLinkIndex(1);
                    setIsSurfaceBg(true);
                } else {
                    setActiveLinkIndex(0);
                    setIsSurfaceBg(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="nav-header" ref={navRef} className={`header ${isFixed ? 'fixed' : ''} ${modalState.isVisible ? 'hidden' : ''} ${isSurfaceBg ? 'bg-surface' : 'bg-background'}`}>
            <div className="mode-toggle" onClick={props.toggleDarkMode}>
                {props.isDarkMode ? (
                    <LightModeIcon alt="Light Mode" />
                ) : (
                    <DarkModeIcon alt="Dark Mode" />
                )}
            </div>
            <div className="header-links">
                <div
                    id="about-link"
                    className={activeLinkIndex === 0 ? 'active' : ''}
                >About</div>
                <div
                    id="projects-link"
                    className={activeLinkIndex === 1 ? 'active' : ''}
                >Projects</div>
                <div
                    className={activeLinkIndex === 2 ? 'active' : ''}
                    onClick={handleContactClick}
                >Contact</div>
            </div>
        </nav>
    );
}

export default Header;
