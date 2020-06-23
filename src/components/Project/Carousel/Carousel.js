import React, { useState, useRef } from 'react';
import CarouselData from './CarouselData';
import { ReactComponent as PreviousIcon } from '../../../assets/svg/previous.svg';
import { ReactComponent as NextIcon } from '../../../assets/svg/next.svg';

const Carousel = () => {
    const slider = useRef();
    const [next, setNext] = useState(true);
    const [previous, setPrevious] = useState(false);

    const nextHandler = () => {
        slider.current.scrollLeft += 300;
        if (
            slider.current.scrollWidth - slider.current.scrollLeft ===
            slider.current.clientWidth
        ) {
            setNext(false);
            setPrevious(true);
        } else {
            setNext(true);
        }
    };

    const previousHandler = () => {
        if (slider.current.scrollLeft > 0) {
            slider.current.scrollLeft -= 300;
            setPrevious(true);
        } else {
            setPrevious(false);
            setNext(true);
        }
    };

    return (
        <section class="carousel">
            <div className="slider" ref={slider}>
                {CarouselData.map(image => (
                    <div key={image.id} className="mr-3">
                        <img src={image.src} alt="" />
                    </div>
                ))}
            </div>

            <div class="carousel-buttons">
                <span
                    class={`carousel-button previous ${
                        !previous && 'disabled'
                    }`}
                    onClick={previousHandler}
                >
                    <PreviousIcon />
                </span>
                <span
                    class={`carousel-button next ${!next && 'disabled'}`}
                    onClick={nextHandler}
                >
                    <NextIcon />
                </span>
            </div>
        </section>
    );
};

export default Carousel;
