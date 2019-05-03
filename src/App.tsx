import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Hello from './Hello/Hello';
import VirtualDOMCalculator from './VirtualDOMCalculator/VirtualDOMCalculator';
import PropsStatesLifes from './PropsStatesLifes/PropsStatesLifes';
import MousePosition from './MousePosition/MousePosition';
import PropInStateProblem from './PropInStateProblem/PropInStateProblem';
import ReactIsJustFunctions from './ReacIsJustFunctions/ReactIsJustFunctions';
import { PropsLifesWithFunctions } from './PropsLifesWithFunctions/PropsLifesWithFunctions';

class App extends Component {
  render() {
    return [
      <Hello key="hello" name="world"/>,
      <Router key="router">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/VirtualDOMCalculator">VirtualDOMCalculator</Link>
              </li>
              <li>
                <Link to="/ReactIsJustFonctions">React is just function</Link>
              </li>
              <li>
                <Link to="/PropsLifesWithFunctions">Props lifes only with funtions ++</Link>
              </li>
              <li>
                <Link to="/PropsStatesLifes">Props/state lifes</Link>
              </li>
              <li>
                <Link to="/PropInStateProblem">Prop in state problem</Link>
              </li>
              <li>
                <Link to="/MousePosition/">MousePosition</Link>
              </li>
            </ul>
          </nav>

          <Route path="/VirtualDOMCalculator" exact component={VirtualDOMCalculator} />
          <Route path="/ReactIsJustFonctions" component={ReactIsJustFunctions} />
          <Route path="/PropsLifesWithFunctions" component={() => <PropsLifesWithFunctions rootProps="coucou" />} />
          <Route path="/PropInStateProblem" component={PropInStateProblem} />
          <Route path="/PropsStatesLifes" component={() => <PropsStatesLifes rootProps="coucou" />} />
          <Route path="/MousePosition" component={MousePosition} />
        </div>
      </Router>
    ];
  }
}

export default App;
