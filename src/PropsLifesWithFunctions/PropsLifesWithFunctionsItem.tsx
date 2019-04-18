import React from 'react';
import NewRender from '../PropsStatesLifes/NewRender';

let renderForceItem = 0;
let renderForceItem1 = 0;
let renderForceItem2 = 0;

const PropsLifesWithFunctionsItem: React.FC<any> = ({ item }) => {
  renderForceItem++;
  return <div>
    <p>Prop item.property {item.property} (<NewRender key={renderForceItem} />)</p>
  </div>;
};

const PropsLifesWithFunctionsItemForMemo: React.FC<any> = ({ item }) => {
  renderForceItem1++;
  return <div>
    <p>Memo Prop item.property {item.property} (<NewRender key={renderForceItem} />)</p>
  </div>;
};

const PropsLifesWithFunctionsItemProperty: React.FC<any> = ({ property }) => {
  renderForceItem2++;
  return <div>
    <p>Memo Prop property {property} (<NewRender key={renderForceItem} />)</p>
  </div>;
};

const PropsLifesWithFunctionsItemMemo = React.memo(PropsLifesWithFunctionsItemForMemo);
const PropsLifesWithFunctionsItemPropertyMemo = React.memo(PropsLifesWithFunctionsItemProperty);

export {PropsLifesWithFunctionsItem, PropsLifesWithFunctionsItemMemo, PropsLifesWithFunctionsItemPropertyMemo}
