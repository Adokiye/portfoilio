import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
// import Footer from '../components/Footer/footer';

class Home extends Component {
    state = {};
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Main />
                        {/* <Footer /> */}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Home;
