import React, { useContext, useEffect } from 'react';
import ModalContext from './ModalContext';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';

function Contact() {
    const { modalState } = useContext(ModalContext);

    return (
        <section id="contact" className={modalState.isVisible ? 'hidden' : ''}>
            <h2>Contact</h2>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jeremy-phares/" target="_blank" rel="noreferrer nofollow noopener"><LinkedInIcon alt="LinkedIn" /></a>
                <a href="https://github.com/Jer-Pha" target="_blank" rel="noreferrer nofollow noopener"><GitHubIcon alt="GitHub" /></a>
                <a href="mailto:jeremy.phares.dev@gmail.com"><EmailIcon alt="Email" /></a>
            </div>
            <p id="footer">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Jeremy&nbsp;Phares</p>
        </section>
    );
}

export default Contact;
