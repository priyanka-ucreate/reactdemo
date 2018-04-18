import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faqs from './Faq';

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/faq" component={Faqs} />
              </Switch>
            </Router>
        );
    }
}

export default App;
