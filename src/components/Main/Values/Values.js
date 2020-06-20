import React from 'react';
import ValuesIcon from '../../../assets/svg/values.svg';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import Value from './Value/Value';
import ValuesData from '../../../data/ValuesData';

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
                        {ValuesData.map(({ id, className, icon, name }) => (
                            <Value
                                key={id}
                                icon={icon}
                                name={name}
                                className={className}
                            />
                        ))}
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
