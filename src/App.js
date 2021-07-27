import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Admin from './components/Admin';
import RequestInfo from './components/RequestInfo';

const App = () => {
  return(
    <>
      <Router>
        <Switch>
          <Route path='/admin' component={Admin} exact/>
          <Route path='/request' component={RequestInfo} exact/>
          <Route component={RequestInfo} />
        </Switch>
      </Router>
    </>
  )
};

export default App;
