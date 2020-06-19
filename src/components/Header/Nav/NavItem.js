import React from 'react';

const NavItem = ({ href, name }) => {
    return (
        <li class="nav__item">
            <a href={href} class="nav__link">
                {name}
            </a>
        </li>
    );
};

export default NavItem;
