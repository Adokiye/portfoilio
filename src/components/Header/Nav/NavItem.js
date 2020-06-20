import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ name, to, onClick, offset }) => {
    return (
        <li className="nav__item">
            <Link
                className="nav__link"
                activeClass="active"
                to={to}
                spy={true}
                offset={offset}
                onClick={onClick}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavItem;
