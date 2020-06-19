import React from 'react';
import Home from './Home/Home';
import Values from './Values/Values';
import Projects from './Projects/Projects';
import GetInTouch from './GetInTouch/GetInTouch';

const Main = () => {
    return (
        <main>
            <div className="container">
                <Home />
                <Values />
                <Projects />
                <GetInTouch />
            </div>
        </main>
    );
};

export default Main;
