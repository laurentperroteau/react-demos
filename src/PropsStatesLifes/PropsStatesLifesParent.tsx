import React from 'react';

import './PropsStatesLifes.css';
import { StateGrandFather } from './PropsStatesLifes';
import PropsStatesLifesChild from './PropsStatesLifesChild';
import { DataGrandFather } from '../PropsLifesWithFunctions/PropsLifesWithFunctions';
import NewRender from './NewRender';

type State = {}

let renderForce = 0;

const PropsStatesLifesParent: React.FC<DataGrandFather> = (props) => {

  const updatePrimitive = () => {
    // this.props.primitive = 'primitive-from-child';
    console.log(props.primitive);
  };

  renderForce++;
  return <React.Fragment>
    <div className="lifes lifes--parent">
      <div className="lifes__name">
        <h2>Parent (<NewRender key={renderForce} />)</h2>
      </div>
      <div className="lifes__name">
        <button onClick={updatePrimitive}>update prop primitive (pas possible read-only)</button>
      </div>
      <br />
      <div className="lifes__inner">
        <div>
          <h3>this</h3>
          <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(props, null, 2)}
          </pre>
        </div>
      </div>
    </div>
    <PropsStatesLifesChild />
  </React.Fragment>
};

export default PropsStatesLifesParent;
