import React, { useState } from 'react';

function Tooltip({ children, text }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
            <span className="tooltip-text" style={{ visibility: isVisible ? 'visible' : 'hidden', opacity: isVisible ? 1 : 0 }}>
                {text}
            </span>
        </div>
    );
}

export default Tooltip;
