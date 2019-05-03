import React from 'react';

import './PropsStatesLifes.css';
import NewRender from '../PropsStatesLifes/NewRender';
import PropsLifesWithFunctionsParent from './PropsLifesWithFunctionsParent';
import {
  PropsLifesWithFunctionsItem,
  PropsLifesWithFunctionsItemMemo,
  PropsLifesWithFunctionsItemPropertyMemo
} from './PropsLifesWithFunctionsItem';

type StateArrayOfObject = {
  property: string;
}

type Props = {
  rootProps: string
}

export type DataGrandFather = {
  primitive: string;
  arrayOfObject: StateArrayOfObject[];
}

let renderForce = 0;
let alternateCount = 1;
let primitiveCount = 1;
let arrayOfObjectCount = 2;

export const PropsLifesWithFunctions: React.FC<Props> = () => {
  alternateCount++;
  if (alternateCount % 2 === 0) {
    primitiveCount++;
  } else {
    arrayOfObjectCount++;
  }

  const data = {
    primitive: 'primitive-v' + primitiveCount,
    arrayOfObject: [
      {
        property: '1'
      },
      {
        property: arrayOfObjectCount + ''
      }
    ]
  };

  return <div className="lifes-ctn">
    <div className="lifes lifes--grand-parent">
      <div className="lifes__name">
        <h2>Grand parent (<NewRender key={renderForce} />)</h2>
      </div>
      <br />
      <div className="lifes__inner">
        <div>
          <h3>data</h3>
          <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(data, null, 2)}
        </pre>
        </div>
        <div>
          <PropsLifesWithFunctionsItem item={data.arrayOfObject[0]} />
          <PropsLifesWithFunctionsItem item={data.arrayOfObject[1]} />
          <PropsLifesWithFunctionsItemMemo item={data.arrayOfObject[0]} />
          <PropsLifesWithFunctionsItemMemo item={data.arrayOfObject[1]} />
          <PropsLifesWithFunctionsItemPropertyMemo property={data.arrayOfObject[0].property} />
          <PropsLifesWithFunctionsItemPropertyMemo property={data.arrayOfObject[1].property} />
        </div>
      </div>
      <div>
        <h4>Conclusions :</h4>
        <ul>
          <li>un changement de prop déclenche toujours le rendu de tous ses enfants</li>
          <li>on peut utiliser Memo mais ne fonctionnera pas avec propriété imbriquée (le composant sera tout de même actualisé)</li>
        </ul>
      </div>
    </div>
    <PropsLifesWithFunctionsParent {...data} />
  </div>;
};
