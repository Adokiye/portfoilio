import React, { useState } from 'react';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import Project from '../../../utils/Project/Project';
import {
    laravelData,
    nodejsData,
    allData,
    flutterData,
    reactNativeData,
} from '../../../data/ProjectsData';
import './Projects.css';

const Projects = () => {
    const [projectType, setProjectType] = useState('all');

    return (
        <section className="projects" id="projects">
            <div className="projects__title text-center text-md-left">
                <SectionHeader name="Projects" />
                <ul className="projects__list">
                    <li
                        className={
                            projectType === 'all'
                                ? 'projects__item active'
                                : 'projects__item'
                        }
                    >
                        <span href="#0" onClick={() => setProjectType('all')}>
                            ALL
                        </span>
                    </li>
                    <li
                        className={
                            projectType === 'reactnative'
                                ? 'projects__item active'
                                : 'projects__item'
                        }
                    >
                        <span
                            href="#0"
                            onClick={() => setProjectType('reactnative')}
                        >
                            REACT NATIVE
                        </span>
                    </li>
                    <li
                        className={
                            projectType === 'flutter'
                                ? 'projects__item active'
                                : 'projects__item'
                        }
                    >
                        <span
                            href="#0"
                            onClick={() => setProjectType('flutter')}
                        >
                            FLUTTER
                        </span>
                    </li>
                    <li
                        className={
                            projectType === 'laravel'
                                ? 'projects__item active'
                                : 'projects__item'
                        }
                    >
                        <span
                            href="#0"
                            onClick={() => setProjectType('laravel')}
                        >
                            LARAVEL
                        </span>
                    </li>
                    <li
                        className={
                            projectType === 'nodejs'
                                ? 'projects__item active'
                                : 'projects__item'
                        }
                    >
                        <span
                            href="#0"
                            onClick={() => setProjectType('nodejs')}
                        >
                            NODE JS
                        </span>
                    </li>
                </ul>
            </div>

            <div className="project__list">
                {projectType === 'all' &&
                    allData.map(
                        ({ id, className, title, subtitle, image, href }) => (
                            <Project
                                key={id}
                                className={className}
                                title={title}
                                subtitle={subtitle}
                                src={image.src}
                                alt={image.alt}
                                path={href}
                            />
                        )
                    )}
                {projectType === 'flutter' &&
                    flutterData.map(
                        ({ id, className, title, subtitle, image, href }) => (
                            <Project
                                key={id}
                                className={className}
                                title={title}
                                subtitle={subtitle}
                                src={image.src}
                                alt={image.alt}
                                path={href}
                            />
                        )
                    )}
                {projectType === 'reactnative' &&
                    reactNativeData.map(
                        ({ id, className, title, subtitle, image, href }) => (
                            <Project
                                key={id}
                                className={className}
                                title={title}
                                subtitle={subtitle}
                                path={href}
                                src={image.src}
                                alt={image.alt}
                            />
                        )
                    )}
                {projectType === 'laravel' &&
                    laravelData.map(
                        ({ id, className, title, subtitle, image, href }) => (
                            <Project
                                key={id}
                                className={className}
                                title={title}
                                subtitle={subtitle}
                                src={image.src}
                                alt={image.alt}
                                path={href}
                            />
                        )
                    )}
                {projectType === 'nodejs' &&
                    nodejsData.map(
                        ({ id, className, title, subtitle, image, href }) => (
                            <Project
                                key={id}
                                className={className}
                                title={title}
                                subtitle={subtitle}
                                src={image.src}
                                alt={image.alt}
                                path={href}
                            />
                        )
                    )}
            </div>
        </section>
    );
};

export default Projects;
