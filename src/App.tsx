import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Hello from './Hello/Hello';
import VirtualDOMCalculator from './VirtualDOMCalculator/VirtualDOMCalculator';
import PropsStatesLifes from './PropsStatesLifes/PropsStatesLifes';
import MousePosition from './MousePosition/MousePosition';

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
                <Link to="/PropsStatesLifes">Props/state lifes</Link>
              </li>
              <li>
                <Link to="/MousePosition/">MousePosition</Link>
              </li>
            </ul>
          </nav>

          <Route path="/VirtualDOMCalculator" exact component={VirtualDOMCalculator} />
          <Route path="/PropsStatesLifes" component={() => <PropsStatesLifes rootProps="coucou" />} />
          <Route path="/MousePosition" component={MousePosition} />
        </div>
      </Router>
    ];
  }
}

export default App;
