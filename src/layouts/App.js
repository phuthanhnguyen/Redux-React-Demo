import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Demo from './demoLayout';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ Demo } />
        <Route path="demo" component={Demo} />
      </Router>
    );
  }
}

export default App;
