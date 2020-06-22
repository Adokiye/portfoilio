import React from 'react';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import SeleImg from '../../../assets/img/sele.png';

const ProjectBrief = () => {
    return (
        <section>
            <div class="row align-items-center sele-landing">
                <div class="col-lg-4 text-center text-lg-left mb-4">
                    <h1 class="font-weight-normal bebas">SELE</h1>
                    <div class="pill__box">
                        {['', ''].map(() => (
                            <p class="pill mb-2">Android</p>
                        ))}
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="sele-landing__image">
                        <img src={SeleImg} alt="Sele" />
                    </div>
                </div>
            </div>
            <div class="values__title">
                <SectionHeader name="Project Brief" isCentered />
            </div>
            <p class="sele-landing__brief">
                I’m an enthusiastic web developer and I have developed simple
                and intelligent solutions from complex requirements. I’m
                available for remote gigs. Let’s make something special
            </p>
        </section>
    );
};

export default ProjectBrief;
