import React from 'react';
import { Link } from 'react-scroll';
import LandingImage from '../../../assets/img/adokiye.jpg';
import { ReactComponent as ArrowDownIcon } from '../../../assets/svg/arrow-down.svg';

const Home = () => {
    return (
        <section id="home">
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
                    <a
                            href="https://twitter.com/seyidev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                    <h3 className="font-weight-light landing__hero">View my CV</h3></a>
                    <Link
                        className="landing__link"
                        to="contact"
                        spy={true}
                        offset={-110}
                    >
                        HIRE ME
                    </Link>
                </div>
                <div className="d-none d-md-block col-md-5">
                    <div className="landing__image">
                        <img src={LandingImage} alt="Adokiye Iruene" />
                    </div>
                </div>
                <div className="landing__scroll">
                    <Link to="values" spy={true} offset={-50}>
                        <ArrowDownIcon />
                        <ArrowDownIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
