import React, { PureComponent } from 'react';
import NewRender from './NewRender';

let renderForceItem = 0;
const PropsStatesLifesItem: React.FC<any> = ({ item }) => {
  renderForceItem++;
  return <div>
    <h2>Prop item.property {item.property} (<NewRender key={renderForceItem} />)</h2>
  </div>;
};

let renderForceItemPure1 = 0;
let renderForceItemPure2 = 0;
class PropsStatesLifesItemPure extends PureComponent<any> {
  render() {
    let { item, property } = this.props;

    if (item) renderForceItemPure1++;
    if (property) renderForceItemPure2++;

    return <div>
      {item && <h2>Pure Prop item.property {item.property} (<NewRender key={renderForceItemPure1} />)</h2>}
      {property && <h2>Pure Prop property {property} (<NewRender key={renderForceItemPure2} />)</h2>}
    </div>;
  }
}

export {PropsStatesLifesItem, PropsStatesLifesItemPure}
