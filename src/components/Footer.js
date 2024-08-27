import React, { useContext } from 'react';
import ModalContext from './ModalContext';


function Footer() {
    const { modalState } = useContext(ModalContext);
    return (
        <footer className={modalState.isVisible ? 'hidden' : ''}>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jeremy-phares/"><img src={`/img/svg/linkedin.svg`} alt="LinkedIn" /></a>
                <a href="https://github.com/Jer-Pha"><img src={`/img/svg/github.svg`} alt="GitHub" /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Jeremy Phares</p>
        </footer>
    );
}

export default Footer;
