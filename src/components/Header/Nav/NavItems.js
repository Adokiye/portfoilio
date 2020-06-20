import React, { useState } from 'react';
import NavItem from './NavItem';
import NavItemData from './NavItemData';
import { ReactComponent as CloseIcon } from '../../../assets/svg/close-icon.svg';

const NavItems = ({ className = '', onMobileScreen = false, toggle }) => {
    const [activeLink, setActiveLink] = useState(1);
    const handleLinkClick = id => {
        setActiveLink(id);
        if (toggle) {
            toggle();
        }
    };
    return (
        <ul className={`nav__list ${className}`}>
            {NavItemData.map(({ id, name, path }) => (
                <NavItem
                    key={id}
                    href={path}
                    name={name}
                    active={id === activeLink}
                    onClick={() => handleLinkClick(id)}
                />
            ))}
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
