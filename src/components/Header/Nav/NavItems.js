import React from 'react';
import NavItem from './NavItem';
import { ReactComponent as CloseIcon } from '../../../assets/svg/close-icon.svg';

const NavItems = ({ className = '', onMobileScreen = false, toggle }) => {
    return (
        <ul className={`nav__list ${className}`}>
            <NavItem href="#" name="Home" />
            <NavItem href="#contact" name="Get In Touch" />
            <NavItem href="#values" name="Values" />
            <NavItem href="#projects" name="Projects" />
            {onMobileScreen && (
                <li className="nav__item">
                    <span className="nav__link" onClick={toggle}>
                        <CloseIcon />
                    </span>
                </li>
            )}
        </ul>
    );
};

export default NavItems;
