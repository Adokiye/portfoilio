import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Project from './Project/Project';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage}></Route>
                            <Route
                                exact
                                path="/project/:projectId"
                                component={Project}
                            ></Route>
                        </Switch>
                    </Router>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
