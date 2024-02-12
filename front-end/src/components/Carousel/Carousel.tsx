import React, {useState} from "react";

type CarouselProps = {
    images: string;
}

const Carousel = ({images} : CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const nextSlide = () => {
        setActiveIndex((prevIndex) => 
        prevIndex === images.length -1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length -1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            <img
            src={images[activeIndex]}
            alt={`Slide ${activeIndex}`}
            className="carousel__img"
            />
            <button onClick={nextSlide} className="carousel__btn carousel__buton--next">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;