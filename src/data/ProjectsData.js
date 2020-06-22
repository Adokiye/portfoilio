import SeleImg from '../assets/img/sele.png';
import NineMoveImg from '../assets/img/nine-move.png';
import KalewoImg from '../assets/img/kalewo.png';

export default [
    {
        id: 1,
        className: 'sele',
        title: 'Sele',
        subtitle: 'Talent Accelerator',
        path: '/project',
        image: {
            src: SeleImg,
            alt: 'Sele',
        },
    },
    {
        id: 2,
        className: 'move',
        title: '9Move',
        subtitle: 'Ride Hailing App',
        path: '/project',
        image: {
            src: NineMoveImg,
            alt: '9Move',
        },
    },
    {
        id: 3,
        className: 'kalewo',
        title: 'Kalewo',
        subtitle: 'Live Streaming Service',
        path: '/project',
        image: {
            src: KalewoImg,
            alt: 'Kalewo',
        },
    },
];
