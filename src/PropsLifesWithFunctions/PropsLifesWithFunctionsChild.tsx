import React from 'react';
import NewRender from '../PropsStatesLifes/NewRender';

let renderForce = 0;

const PropsLifesWithFunctionsChild = () =>  {
  renderForce++;
  return <div className="lifes lifes--child">
    <div className="lifes__name">
      <h2>Enfant (<NewRender key={renderForce} />)</h2>
    </div>
  </div>;
};

export default PropsLifesWithFunctionsChild
