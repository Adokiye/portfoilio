import React from 'react';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../assets/svg/arrow-right-and-underscore.svg';

const SectionHeader = ({ name, isCentered = false, className = '' }) => {
    return (
        <h2 className={`bebas ${isCentered ? 'text-center' : ''} ${className}`}>
            <ArrowLeftWithUnderscoreIcon />
            {name}
        </h2>
    );
};

export default SectionHeader;
