import React, { useState } from 'react';
import CarouselData from './CarouselData';
import { ReactComponent as PreviousIcon } from '../../../assets/svg/previous.svg';
import { ReactComponent as NextIcon } from '../../../assets/svg/next.svg';

const Carousel = () => {

    return (
        <section class="carousel">
            <div className="carous">
                {CarouselData.map(image => (
                    <div key={image.id}>
                        <img src={image.src} alt="" />
                    </div>
                ))}
            </div>

            <div class="carousel-buttons">
                <a class="carousel-button previous">
                    <PreviousIcon />
                </a>
                <a class="carousel-button next">
                    <NextIcon />
                </a>
            </div>
        </section>
    );
};

export default Carousel;
