import React from 'react';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import Project from './Project/Project';
import ProjectsData from '../../../data/ProjectsData';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__title text-center text-md-left">
                <h2 className="bebas">
                    <ArrowLeftWithUnderscoreIcon />
                    Projects
                </h2>
                <ul className="projects__list">
                    <li className="projects__item active">
                        <a href="#">ALL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">LARAVEL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">NODE JS</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">REACT NATIVE</a>
                    </li>
                    <li className="projects__item">
                        <a href="#">FLUTTER</a>
                    </li>
                </ul>
            </div>

            <div className="project__list">
                {ProjectsData.map(
                    ({ id, className, title, subtitle, image }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default Projects;
