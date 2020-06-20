import React from 'react';

const NavItem = ({ href, name, active, onClick }) => {
    const activeClass = active ? 'active' : '';
    return (
        <li className="nav__item">
            <a
                href={href}
                className={`nav__link ${activeClass}`}
                onClick={onClick}
            >
                {name}
            </a>
        </li>
    );
};

export default NavItem;
