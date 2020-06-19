import React from 'react';

const NavItem = ({ href, name }) => {
    return (
        <li className="nav__item">
            <a href={href} className="nav__link">
                {name}
            </a>
        </li>
    );
};

export default NavItem;
