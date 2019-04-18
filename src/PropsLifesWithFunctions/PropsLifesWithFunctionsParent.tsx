import React from 'react';

import './PropsStatesLifes.css';
import NewRender from '../PropsStatesLifes/NewRender';
import { DataGrandFather } from './PropsLifesWithFunctions';
import PropsLifesWithFunctionsChild from './PropsLifesWithFunctionsChild';

let renderForce = 0;

const PropsLifesWithFunctionsParent: React.FC<DataGrandFather> = (props) => {

  renderForce++;

  return <React.Fragment>
    <div className="lifes lifes--parent">
      <div className="lifes__name">
        <h2>Parent (<NewRender key={renderForce} />)</h2>
      </div>
      <br />
      <div className="lifes__inner">
        <div>
          <h3>props</h3>
          <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(props, null, 2)}
          </pre>
        </div>
      </div>
    </div>
    <PropsLifesWithFunctionsChild />
  </React.Fragment>;
};

export default PropsLifesWithFunctionsParent;
