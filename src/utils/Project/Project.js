import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../assets/svg/arrow-right.svg';

const Project = ({ className = '', title, subtitle, path, src, alt }) => {
    return (
        <div className={`project__item row ${className}`}>
            <div className="col-5 col-md-6 project__item--box">
                <h2 className="project__title">{title}</h2>
                <h4 className="project__subtitle">{subtitle}</h4>
                <NavLink to={path} className="project__link">
                    View Works
                    <ArrowLeftIcon />
                </NavLink>
            </div>
            <div className="project__image">
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default Project;
