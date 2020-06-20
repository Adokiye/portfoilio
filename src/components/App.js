import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Main />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
