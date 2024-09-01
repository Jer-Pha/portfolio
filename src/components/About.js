import React, { useState, useEffect, useRef } from 'react';
import profilePicture from '../img/png/jeremy.png';
import { PythonIcon, DjangoIcon, MySqlIcon, CssIcon, HtmlIcon, JavaScriptIcon, GitIcon } from './Icons'

function About() {
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef(null);
    const originalSectionTop = useRef(0); // Store original top position
    const aboutContentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (aboutContentRef.current) {
            observer.observe(aboutContentRef.current);
        }

        return () => {
            if (aboutContentRef.current) {
                observer.unobserve(aboutContentRef.current);
            }
        };
    }, []);


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
            document.getElementById('about-link')?.removeEventListener('click', handleAboutLinkClick);
        };
    }, [isFixed]);

    return (
        <>
            {isFixed && ( // Render placeholder only when not fixed
                <div
                    style={{
                        height: (sectionRef.current?.offsetHeight) + 'px',
                    }}
                />
            )}
            <section
                id="about"
                className={`about-me section-body ${isFixed ? 'fixed' : ''}`}
                ref={sectionRef}>
                <h2>About</h2>
                <div className="about-container" ref={aboutContentRef}>
                    <div className="about-content">
                        <p className="blurb">
                            Driven by a passion for crafting elegant and efficient software solutions, I'm a data-driven software developer with a focus on backend optimization and frontend experience. With over two years of hands-on experience building production-level applications with Python and Django, I've successfully optimized complex systems for improved performance and scalability. I enjoy creating user-friendly, innovative, and performant applications that deliver tangible value. Continuously exploring new technologies and best practices, I'm always eager to contribute to innovative projects and make a meaningful impact.
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

export default About;
