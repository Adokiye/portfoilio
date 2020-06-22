import React, {useState} from 'react';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import Project from './Project/Project';
import {laravelData, nodejsData, allData, flutterData, reactNativeData } from '../../../data/ProjectsData';
import './Projects.css';

const Projects = () => {
    const [projectType, setProjectType] = useState('all');

    return (
        <section className="projects" id="projects">
            <div className="projects__title text-center text-md-left">
                <h2 className="bebas">
                    <ArrowLeftWithUnderscoreIcon />
                    Projects
                </h2>
                <ul className="projects__list">
                    <li className={projectType === 'all' ? "projects__item active" : "projects__item"}>
                        <a href="#0" onClick={()=> setProjectType('all')}>ALL</a>
                    </li>
                    <li className={projectType === 'reactnative' ? "projects__item active" : "projects__item"}>
                        <a href="#0" onClick={()=> setProjectType('reactnative')}>REACT NATIVE</a>
                    </li>
                    <li className={projectType === 'flutter' ? "projects__item active" : "projects__item"}>
                        <a href="#0" onClick={()=> setProjectType('flutter')}>FLUTTER</a>
                    </li>
                    <li className={projectType === 'laravel' ? "projects__item active" : "projects__item"}>
                        <a href="#0" onClick={()=> setProjectType('laravel')}>LARAVEL</a>
                    </li>
                    <li className={projectType === 'nodejs' ? "projects__item active" : "projects__item"}>
                        <a href="#0" onClick={()=> setProjectType('nodejs')}>NODE JS</a>
                    </li>
                    
                </ul>
            </div>

            <div className="project__list">
               {projectType === 'all' && allData.map(
                    ({ id, className, title, subtitle, image, href }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                            href={href}
                        />
                    )
                )}
                {projectType === 'flutter' && flutterData.map(
                    ({ id, className, title, subtitle, image, href }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                            href={href}
                        />
                    )
                )}                
                {projectType === 'reactnative' && reactNativeData.map(
                    ({ id, className, title, subtitle, image, href }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                            href={href}
                        />
                    )
                )}
                {projectType === 'laravel' && laravelData.map(
                    ({ id, className, title, subtitle, image, href }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                            href={href}
                        />
                    )
                ) }
                {projectType === 'nodejs' && nodejsData.map(
                    ({ id, className, title, subtitle, image, href }) => (
                        <Project
                            key={id}
                            className={className}
                            title={title}
                            subtitle={subtitle}
                            src={image.src}
                            alt={image.alt}
                            href={href}
                        />
                    )
                ) }
            </div>
        </section>
    );
};

export default Projects;
