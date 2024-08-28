import React, { useState, useEffect } from 'react';

function Hero() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div id="home" className={`hero-view section-body ${isAtTop ? 'glowing' : ''}`}>
            <div>
                <h1>Hello<span className="fade-in">, I'm <span className="hero-name">Jeremy</span>.</span></h1>
            </div>
        </div>
    );
}

export default Hero;
