import React, { useState, useEffect, useRef, useContext } from 'react';
import ModalContext from './ModalContext';

function ImageCarousel(props) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { modalState, setModalState, toggleBodyOverflow } = useContext(ModalContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const prevString = useRef(null);
    const modalId = `modal-${props.string}`;
    const handleImageClick = (index) => {
        setSelectedImage(images[index].png);
        setModalState({ modalId: modalId, isVisible: true });
    };
    const handleModalPrev = () => {
        setCurrentSlide((prevSlide) => {
            const newIndex = (prevSlide - 1 + images.length) % images.length;
            setSelectedImage(images[newIndex].png);
            return newIndex;
        });
    };

    const handleModalNext = () => {
        setCurrentSlide((prevSlide) => {
            const newIndex = (prevSlide + 1) % images.length;
            setSelectedImage(images[newIndex].png);
            return newIndex;
        });
    };

    useEffect(() => {
        if (prevString.current === props.string) return;

        const fetchImages = async () => {
            const imageUrls = [];
            for (let i = 1; i <= props.imageCount; i++) {
                imageUrls.push({
                    webp: `/img/webp/${props.string}-${i}.webp`,
                    png: `/img/png/${props.string}-${i}.png`
                });
            }

            const imagePromises = imageUrls.map((urlObj) =>
                fetch(urlObj.webp)
                    .then((response) => response.blob())
                    .then((blob) => ({
                        webp: URL.createObjectURL(blob),
                        png: urlObj.png
                    }))
            );

            const imageData = await Promise.all(imagePromises);
            setImages(imageData);
        };

        fetchImages();
        prevString.current = props.string;
    }, [props.string]);

    useEffect(() => {
        toggleBodyOverflow(modalState.isVisible);
    }, [modalState.isVisible, toggleBodyOverflow]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && modalState.isVisible) {
                setModalState({ modalId: null, isVisible: false });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalState.isVisible, setModalState]);

    return (
        <div className="image-carousel">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.webp}
                        alt={props.string}
                        className={index === currentSlide ? 'slide active-slide' : 'slide'}
                        loading="lazy"
                        onClick={() => handleImageClick(index)}
                    />
                ))}
                <div className="navigation">
                    <div onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)}>
                        <img src="/img/svg/arrow-left.svg" alt="Previous" />
                    </div>
                    <div onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)}>
                        <img src="/img/svg/arrow-right.svg" alt="Next" />
                    </div>
                </div>
            </div>

            {modalState.isVisible && modalState.modalId === modalId && (
                <div className="modal" onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        setModalState({ modalId: null, isVisible: false });
                    }
                }}>
                    <div className="modal-content">
                        <img src={selectedImage} alt={props.string} />
                        <div className="modal-navigation">
                            <div onClick={handleModalPrev}>
                                <img src="/img/svg/arrow-left.svg" alt="Previous" />
                            </div>
                            <div onClick={handleModalNext}>
                                <img src="/img/svg/arrow-right.svg" alt="Next" />
                            </div>
                        </div>
                        <div
                            className="close-button"
                            onClick={() => setModalState(false)}>
                            <img src="/img/svg/close.svg" alt="Close" />
                        </div>
                    </div>
                </div>
            )}

            <div className="dot-indicator">
                {images.map((image, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? 'dot active-dot' : 'dot'}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;
