import React from 'react';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as LinkedIinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 footer__link--box">
                    <a
                            href="https://github.com/Adokiye"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href="https://twitter.com/seyidev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/iruene-adokiye-oluwaseyifunmi-5537a5163/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <LinkedIinIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/adokz1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__link"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <p className="footer__credits">
                            <span className="mr-3">Adokiye 2020</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
