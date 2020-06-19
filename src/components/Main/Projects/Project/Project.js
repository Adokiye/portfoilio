import React from 'react';
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/svg/arrow-left.svg';

const Project = ({ className = '', title, subtitle, href, src, alt }) => {
    return (
        <div className={`project__item row ${className}`}>
            <div className="col-5 col-md-6 project__item--box">
                <h2 className="project__title">{title}</h2>
                <h4 className="project__subtitle">{subtitle}</h4>
                <a className="project__link" href={href}>
                    View Work
                    <ArrowLeftIcon />
                </a>
            </div>
            <div className="project__image">
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default Project;
