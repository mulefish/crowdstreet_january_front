import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import CreateAccountInit from './pages/CreateAccountInit.jsx'
import LandingPageInit from './pages/LandingPageInit.jsx'
import SuccessInit from './pages/SuccessInit.jsx'
import SorryInit from './pages/SorryInit.jsx'

export default function App() {
  const dispatch = useDispatch();
  return (
    <div>
     <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageInit />
          </Route>
          <Route exact path="/create">
            <CreateAccountInit />
          </Route>
          <Route exact path="/success">
            <SuccessInit />
          </Route>
          <Route exact path="/sorry">
            <SorryInit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}