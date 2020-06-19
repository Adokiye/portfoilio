import React from 'react';
import LandingImage from '../../../assets/img/adokiye.png';
import { ReactComponent as ArrowDownIcon } from '../../../assets/svg/arrow-down.svg';

const Home = () => {
    return (
        <section>
            <div className="row align-items-center landing">
                <div className="d-md-none col-12">
                    <div className="landing__image">
                        <img src={LandingImage} alt="Adokiye Iruene" />
                    </div>
                </div>
                <div className="col-md-7">
                    <h2 className="font-weight-normal">Hi.</h2>
                    <h1 className="font-weight-normal bebas landing__title">
                        I'M
                        <span className="primary"> &#123; ADOKIYE &#125; </span>
                        &amp; I'M A FULL-STACK WEB DEVELOPER
                    </h1>
                    <h3 className="font-weight-light landing__hero">
                        I’m an enthusiastic web developer and I have developed
                        simple and intelligent solutions from complex
                        requirements. I’m available for remote gigs. Let’s make
                        something special
                    </h3>
                    <a href="#contact" className="landing__link">
                        HIRE ME
                    </a>
                </div>
                <div className="d-none d-md-block col-md-5">
                    <div className="landing__image">
                        <img src={LandingImage} alt="Adokiye Iruene" />
                    </div>
                </div>
                <div className="landing__scroll">
                    <a href="#values">
                        <ArrowDownIcon />
                        <ArrowDownIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
