import { useEffect } from 'react';

function useShadowSkew() {
    const lightSource = document.querySelector('.light-source');
    useEffect(() => {
        const updateShadowSkew = () => {
            if (!lightSource) return;

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const h2 = section.querySelector('h2');
                if (!h2) return;

                const h2Rect = h2.getBoundingClientRect();
                const lightSourceRect = lightSource.getBoundingClientRect();

                const computedStyle = window.getComputedStyle(h2);

                // Calculate angle from h2 center to light source
                const deltaX = lightSourceRect.left - (h2Rect.left + h2Rect.width / 2);
                const deltaY = lightSourceRect.top - (h2Rect.top + h2Rect.height / 2);
                const angleRadians = Math.atan2(deltaY, deltaX);
                const angleDegrees = angleRadians * (180 / Math.PI) + 90;
                const headerWidth = h2.offsetWidth;
                // const skewedWidth = headerWidth + (headerWidth * Math.abs(Math.cos(angleRadians)));
                const paddingLeft = parseFloat(computedStyle.paddingLeft);
                const paddingRight = parseFloat(computedStyle.paddingRight);
                const borderLeft = parseFloat(computedStyle.borderLeftWidth);
                const borderRight = parseFloat(computedStyle.borderRightWidth);
                const totalHeaderWidth = headerWidth + paddingLeft + paddingRight + borderLeft + borderRight;
                const skewedWidth = totalHeaderWidth / Math.abs(Math.cos(angleRadians));

                h2.style.setProperty('--shadow-skew', `${angleDegrees}deg`);
                h2.style.setProperty('--shadow-padding', `${(skewedWidth - headerWidth) / 2}px`);
                console.log(headerWidth, skewedWidth, angleRadians);
            });
        };

        updateShadowSkew();
        window.addEventListener('scroll', updateShadowSkew);

        return () => window.removeEventListener('scroll', updateShadowSkew);
    }, [lightSource]);
}

export default useShadowSkew;
