import React from 'react';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import { allData } from '../../../data/ProjectsData';
import Project from '../../../utils/Project/Project';

const MoreProjects = () => {
    return (
        <section class="more-projects">
            <div class="values__title">
                <SectionHeader name="More Projects" isCentered />
            </div>

            <div class="projects">
                {allData.map(
                    ({ id, className, title, subtitle, href, image }) => (
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
            </div>
        </section>
    );
};

export default MoreProjects;
