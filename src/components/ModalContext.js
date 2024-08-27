import { createContext, useState, useCallback } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({ modalId: null, isVisible: false });
    const toggleBodyOverflow = useCallback((isModalOpen) => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, []);


    return (
        <ModalContext.Provider value={{ modalState, setModalState, toggleBodyOverflow }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
