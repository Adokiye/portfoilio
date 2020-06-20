import React from 'react';
import { ReactComponent as TeamWorkIcon } from '../assets/svg/teamwork.svg';
import { ReactComponent as SpeedIcon } from '../assets/svg/cube.svg';
import { ReactComponent as CommunicationIcon } from '../assets/svg/cylinder.svg';
import { ReactComponent as AdaptabilityIcon } from '../assets/svg/spanner.svg';

export default [
    {
        id: 1,
        className: '',
        icon: <TeamWorkIcon />,
        name: 'Team Work',
    },
    {
        id: 2,
        className: '',
        icon: <SpeedIcon />,
        name: 'Speed',
    },
    {
        id: 3,
        className: 'values__item--small',
        icon: <CommunicationIcon />,
        name: 'Communication',
    },
    {
        id: 4,
        className: 'values__item--small',
        icon: <AdaptabilityIcon />,
        name: 'Adaptability',
    },
];
