import React from 'react';

import './PropsStatesLifes.css';
import NewRender from './NewRender';
import { StateGrandFather } from './PropsStatesLifes';
import PropsStatesLifesChild from './PropsStatesLifesChild';

type State = {}

let renderForce = 0;

export default class PropsStatesLifesParent extends React.Component<StateGrandFather, State> {

  constructor(props: StateGrandFather) {
    super(props);
  }

  render() {
    renderForce++;
    return <div className="lifes lifes--parent">
      <div className="lifes__name">
        <h2>Parent (<NewRender key={renderForce} />)</h2>
      </div>
      <div className="lifes__name">
        <button onClick={this._updatePrimitive.bind(this)}>update prop primitive (pas possible read-only)</button>
      </div>
      <br />
      <div className="lifes__inner">
        <div>
          <h3>this</h3>
          <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </div>
      </div>
      <PropsStatesLifesChild />
    </div>;
  }

  _updatePrimitive() {
    // this.props.primitive = 'primitive-from-child';
    console.log(this.props.primitive);
  }
}
