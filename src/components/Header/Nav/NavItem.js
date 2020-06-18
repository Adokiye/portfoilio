import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name }) => {
    return (
        <li class="nav__item">
            <NavLink to={to} class="nav__link">
                {name}
            </NavLink>
        </li>
    );
};

export default NavItem;
