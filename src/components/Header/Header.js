import React, { useState } from 'react';
import NavItems from './Nav/NavItems';
import { ReactComponent as HamburgerIcon } from '../../assets/svg/hamburger.svg';
import './Header.css';

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const toggle = () => {
        setShowMobileNav(!showMobileNav);
    };
    const show = showMobileNav ? 'show' : '';

    return (
        <header className="header">
            <nav className="nav container">
                <NavItems className="d-none d-md-flex" />
                <div className="nav__icon d-md-none">
                    <span onClick={toggle}>
                        <HamburgerIcon />
                    </span>
                </div>
                <div className={`nav-mobile ${show}`}>
                    <NavItems toggle={toggle} onMobileScreen />
                </div>
            </nav>
        </header>
    );
};

export default Header;
