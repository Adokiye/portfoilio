import React from 'react';
import NavItem from './NavItem';
import { ReactComponent as CloseIcon } from '../../../assets/svg/close-icon.svg';

const NavItems = ({ className = '', onMobileScreen = false, toggle }) => {
    return (
        <ul className={`nav__list ${className}`}>
            <NavItem to="#" name="Home" />
            <NavItem to="#" name="Get In Touch" />
            <NavItem to="#" name="Values" />
            <NavItem to="#" name="Projects" />
            {onMobileScreen && (
                <li class="nav__item">
                    <span class="nav__link" onClick={toggle}>
                        <CloseIcon />
                    </span>
                </li>
            )}
        </ul>
    );
};

export default NavItems;
