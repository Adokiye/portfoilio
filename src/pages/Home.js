import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';

class Home extends Component {
    state = {};
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Home;
