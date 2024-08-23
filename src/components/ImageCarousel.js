import React, { useState, useEffect } from 'react';


function ImageCarousel(props) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            const imageUrls = [
                `/img/webp/${props.string}-1.webp`,
                `/img/webp/${props.string}-2.webp`,
                `/img/webp/${props.string}-3.webp`,
                `/img/webp/${props.string}-4.webp`,
                `/img/webp/${props.string}-5.webp`,
            ];

            const imagePromises = imageUrls.map((url) =>
                fetch(url)
                    .then((response) => response.blob())
                    .then((blob) => URL.createObjectURL(blob))
            );

            const imageData = await Promise.all(imagePromises);
            setImages(imageData);
        };

        fetchImages();
    }, [props.string]);


    return (
        <div className="image-carousel">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={props.string}
                        className={index === currentSlide ? 'slide active-slide' : 'slide'}
                        loading="lazy"
                    />
                ))}
            </div>
            <div className="navigation">
                <div onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)}>
                    <img src="/img/svg/arrow-left.svg" alt="Previous" />
                </div>
                <div onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)}>
                    <img src="/img/svg/arrow-right.svg" alt="Next" />
                </div>
            </div>
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
