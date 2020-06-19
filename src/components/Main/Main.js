import React from 'react';
import Home from './Home/Home';
import Values from './Values/Values';
import GetInTouch from './GetInTouch/GetInTouch';

const Main = () => {
    return (
        <main>
            <div className="container">
                <Home />
                <Values />
                <GetInTouch />
            </div>
        </main>
    );
};

export default Main;
