import React, { PureComponent } from 'react';
import NewRender from './NewRender';

let renderForceItemPure1 = 0;
let renderForceItemPure2 = 0;

class PropsStatesLifesItemPure extends PureComponent<any> {
  render() {
    let { item } = this.props;

    renderForceItemPure1++;

    return <div>
      <p>Pure Prop item.property {item.property} (<NewRender key={renderForceItemPure1} />, erreur)</p>
    </div>;
  }
}

class PropsStatesLifesItemPropertyPure extends PureComponent<any> {
  render() {
    let { property } = this.props;

    renderForceItemPure2++;

    return <div>
      <p>Pure Prop property {property} (<NewRender key={renderForceItemPure2} />)</p>
    </div>;
  }
}

export {PropsStatesLifesItemPure, PropsStatesLifesItemPropertyPure}
