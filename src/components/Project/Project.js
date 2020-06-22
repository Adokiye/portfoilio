import React from 'react';
import ProjectBrief from './ProjectBrief/ProjectBrief';
import MoreProjects from './MoreProjects/MoreProjects';
import HireMe from './HireMe/HireMe';
import Carousel from './Carousel/Carousel';
import '../../assets/css/sele.css';

const Project = () => {
    return (
        <>
            <ProjectBrief />
            <Carousel />
            <MoreProjects />
            <HireMe />
        </>
    );
};

export default Project;
