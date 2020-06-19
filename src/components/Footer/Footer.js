import React from 'react';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 footer__link--box">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <p className="footer__credits">
                            <span className="mr-3">Adokiye 2019</span>
                            <span>Designed by Inioluwa</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
