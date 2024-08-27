import React, { useState, useEffect, useRef } from 'react';

function AboutMe() {
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef(null);
    const originalSectionTop = useRef(0); // Store original top position

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const currentScrollY = window.scrollY;

                if (!isFixed && sectionTop <= 0) {
                    // Store original top position before fixing
                    originalSectionTop.current = section.offsetTop;
                    setIsFixed(true);
                } else if (isFixed && currentScrollY < originalSectionTop.current) {
                    // Unfix if scrolling up past original position
                    setIsFixed(false);
                }

                prevScrollY = currentScrollY;
            }
        };

        // Handle clicks on the "About" link
        const handleAboutLinkClick = (event) => {
            event.preventDefault();
            const offset = originalSectionTop.current - document.getElementById('navHeader').offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        document.querySelector('a[href="#about"]')?.addEventListener('click', handleAboutLinkClick);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('a[href="#about"]')?.removeEventListener('click', handleAboutLinkClick);
        };
    }, [isFixed]); // Add isFixed to dependency array

    return (
        <>
            {isFixed && ( // Render placeholder only when not fixed
                <div
                    style={{
                        height: sectionRef.current?.offsetHeight + 'px'
                    }}
                />
            )}
            <section
                id="about"
                className={`about-me section-body ${isFixed ? 'fixed' : ''}`}
                ref={sectionRef}>
                <h2 data-header="About">About</h2>
                <p>I'm a passionate software developer with a focus on [your area of expertise]. I have [number] years of experience in [relevant technologies]. I'm always eager to learn new things and contribute to innovative projects.</p>
                <img src="your-profile-picture.jpg" alt="Jeremy Phares" />
            </section>
        </>
    );
}

export default AboutMe;
