import React, { useContext } from 'react';
import ModalContext from './ModalContext';
import { GitHubIcon, LinkedInIcon, EmailIcon, WaveSvg } from './Icons';

function Contact() {
    const { modalState } = useContext(ModalContext);

    return (
        <section id="contact" className={modalState.isVisible ? 'hidden' : ''}>
            <div></div>
            <div className="contact-container">
                <h2>Contact</h2>
                <p>
                    Thank you for taking the time to explore my portfolio. I'm genuinely passionate about creating impactful software, and I'd be thrilled to connect and learn more about your projects.
                </p>
                <div className="social-links">
                    <a href="mailto:jeremy.phares.dev@gmail.com"><EmailIcon alt="Email" /></a>
                    <a href="https://www.linkedin.com/in/jeremy-phares/" target="_blank" rel="noreferrer nofollow noopener"><LinkedInIcon alt="LinkedIn" /></a>
                    <a href="https://github.com/Jer-Pha" target="_blank" rel="noreferrer nofollow noopener"><GitHubIcon alt="GitHub" /></a>
                </div>
            </div>
            <p id="footer">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Jeremy&nbsp;Phares</p>
            <div className="wave-container">
                <WaveSvg />
            </div>
        </section>
    );
}

export default Contact;
