import React, { useState, useEffect, useRef } from 'react';
import profilePicture from '../img/png/jeremy.png';
import { PythonIcon, DjangoIcon, MySqlIcon, CssIcon, HtmlIcon, JavaScriptIcon, GitIcon } from './Icons'

function AboutMe() {
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef(null);
    const originalSectionTop = useRef(0); // Store original top position

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const currentScrollY = window.scrollY;
                const styles = window.getComputedStyle(section);
                const paddingTop = parseFloat(styles.paddingTop);
                const paddingBottom = parseFloat(styles.paddingBottom);
                const contentHeight = section.offsetHeight - paddingTop - paddingBottom;

                if (!isFixed && sectionTop <= 0 && contentHeight <= window.innerHeight) {
                    // Store original top position before fixing
                    originalSectionTop.current = section.offsetTop;
                    setIsFixed(true);
                } else if (isFixed && currentScrollY < originalSectionTop.current) {
                    // Unfix if scrolling up past original position
                    setIsFixed(false);
                }
            }
        };

        // Handle clicks on the "About" link
        const handleAboutLinkClick = (event) => {
            event.preventDefault();
            window.scrollTo({
                top: originalSectionTop.current,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        document.getElementById('about-link')?.addEventListener('click', handleAboutLinkClick);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('a[href="#about"]')?.removeEventListener('click', handleAboutLinkClick);
        };
    }, [isFixed]);

    return (
        <>
            {isFixed && ( // Render placeholder only when not fixed
                <div
                    style={{
                        height: (sectionRef.current?.offsetHeight + 320) + 'px',
                    }}
                />
            )}
            <section
                id="about"
                className={`about-me section-body ${isFixed ? 'fixed' : ''}`}
                ref={sectionRef}>
                <h2 data-header="About">About</h2>
                <div className="about-container">
                    <div className="about-content">
                        <p className="blurb">
                            A passionate software developer with expertise in React, JavaScript, and Python.
                            I enjoy building user-friendly and innovative web applications.
                            I'm a passionate software developer with a focus on [your area of expertise]. I have [number] years of experience in [relevant technologies]. I'm always eager to learn new things and contribute to innovative projects.
                        </p>
                        <div className="icons">
                            <PythonIcon />
                            <DjangoIcon />
                            <MySqlIcon />
                            <HtmlIcon />
                            <CssIcon />
                            <JavaScriptIcon />
                            <GitIcon />
                        </div>
                    </div>
                    <div className="profile-picture-container">
                        <img src={profilePicture} alt="Jeremy Phares" className="profile-picture" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
