import React from 'react';
import ValuesIcon from '../../../assets/svg/values.svg';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import { ReactComponent as TeamWorkIcon } from '../../../assets/svg/teamwork.svg';
import { ReactComponent as SpeedIcon } from '../../../assets/svg/cube.svg';
import { ReactComponent as CommunicationIcon } from '../../../assets/svg/cylinder.svg';
import { ReactComponent as AdaptabilityIcon } from '../../../assets/svg/spanner.svg';

const Values = () => {
    return (
        <section id="values" class="values">
            <div class="values__title">
                <h2 class="bebas text-center">
                    <ArrowLeftWithUnderscoreIcon />
                    Values
                </h2>
                <h4 class="landing__hero values__hero">
                    These are the values i bring to the table and more...
                </h4>
            </div>
            <div class="row values__item--box">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-6 values__item">
                            <TeamWorkIcon />
                            <p class="mt-3">Team Work</p>
                        </div>
                        <div class="col-6 values__item">
                            <SpeedIcon />
                            <p class="mt-3">Speed</p>
                        </div>
                        <div class="col-6 values__item values__item--small">
                            <CommunicationIcon />
                            <p class="mt-3">Communication</p>
                        </div>
                        <div class="col-6 values__item values__item--small">
                            <AdaptabilityIcon />
                            <p class="mt-3">Adaptability</p>
                        </div>
                    </div>
                </div>

                <div class="d-none d-md-block col-md-6">
                    <div class="values__item values__item--large">
                        <img src={ValuesIcon} alt="Values" />
                        <p>I bring all to the table and more...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
