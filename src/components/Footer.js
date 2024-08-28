import React, { useContext } from 'react';
import ModalContext from './ModalContext';
import { GitHubIcon, LinkedInIcon } from './Icons';

function Footer() {
    const { modalState } = useContext(ModalContext);
    return (
        <footer className={modalState.isVisible ? 'hidden' : ''}>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jeremy-phares/"><LinkedInIcon alt="LinkedIn" /></a>
                <a href="https://github.com/Jer-Pha"><GitHubIcon alt="GitHub" /></a>
            </div>
            <p>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Jeremy&nbsp;Phares</p>
        </footer>
    );
}

export default Footer;
