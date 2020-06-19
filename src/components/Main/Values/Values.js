import React from 'react';
import ValuesIcon from '../../../assets/svg/values.svg';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import { ReactComponent as TeamWorkIcon } from '../../../assets/svg/teamwork.svg';
import { ReactComponent as SpeedIcon } from '../../../assets/svg/cube.svg';
import { ReactComponent as CommunicationIcon } from '../../../assets/svg/cylinder.svg';
import { ReactComponent as AdaptabilityIcon } from '../../../assets/svg/spanner.svg';

const Values = () => {
    return (
        <section id="values" className="values">
            <div className="values__title">
                <h2 className="bebas text-center">
                    <ArrowLeftWithUnderscoreIcon /> 
                    Values
                </h2>
                <h4 className="landing__hero values__hero">
                    These are the values i bring to the table and more...
                </h4>
            </div>
            <div className="row values__item--box">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6 values__item">
                            <TeamWorkIcon />
                            <p className="mt-3">Team Work</p>
                        </div>
                        <div className="col-6 values__item">
                            <SpeedIcon />
                            <p className="mt-3">Speed</p>
                        </div>
                        <div className="col-6 values__item values__item--small">
                            <CommunicationIcon />
                            <p className="mt-3">Communication</p>
                        </div>
                        <div className="col-6 values__item values__item--small">
                            <AdaptabilityIcon />
                            <p className="mt-3">Adaptability</p>
                        </div>
                    </div>
                </div>

                <div className="d-none d-md-block col-md-6">
                    <div className="values__item values__item--large">
                        <img src={ValuesIcon} alt="Values" />
                        <p>I bring all to the table and more...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
