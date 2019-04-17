import React from 'react';

import NewRender from './NewRender';

let renderForce = 0;

export default class PropsStatesLifesChild extends React.Component<{}, {}> {

  render() {
    renderForce++;
    return <div className="lifes lifes--child">
      <div className="lifes__name">
        <h2>Enfant (<NewRender key={renderForce} />)</h2>
      </div>
    </div>;
  }
}
