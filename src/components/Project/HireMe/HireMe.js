import React from 'react';
import { ReactComponent as HireMeIcon } from '../../../assets/svg/hire-me.svg';

const HireMe = () => {
    return (
        <section class="text-center">
            <h2 style={{ color: '#555555' }}>
                Lets build something amazing together
            </h2>
            <div class="hire-me">
                <button class="btn btn__primary--outline w-100">
                    Hire Me
                    <HireMeIcon />
                </button>
            </div>
        </section>
    );
};

export default HireMe;
