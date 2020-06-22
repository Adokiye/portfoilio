import React from 'react';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import Project from '../../../utils/Project/Project';
import ProjectsData from '../../../data/ProjectsData';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__title text-center text-md-left">
                <SectionHeader name="Projects" />
                <ul className="projects__list">
                    <li className="projects__item active">
                        <a href="#0">ALL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#0">LARAVEL</a>
                    </li>
                    <li className="projects__item">
                        <a href="#0">NODE JS</a>
                    </li>
                    <li className="projects__item">
                        <a href="#0">REACT NATIVE</a>
                    </li>
                    <li className="projects__item">
                        <a href="#0">FLUTTER</a>
                    </li>
                </ul>
            </div>

            <div className="project__list">
                {ProjectsData.map(
                    ({ id, className, title, subtitle, path, image }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            path={path}
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
