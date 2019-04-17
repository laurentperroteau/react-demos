import React, { Component, PureComponent, useState } from 'react';

import './PropsStatesLifes.css';
import NewRender from './NewRender';
import PropsStatesLifesParent from './PropsStatesLifesParent';
import { PropsStatesLifesItem, PropsStatesLifesItemPure } from './PropsStatesLifesItem';

type StateObject = {
  property: string;
}

type StateArrayOfObject = {
  property: string;
}

type Props = {
  rootProps: string
}

export type StateGrandFather = {
  primitive: string;
  arrayOfPrimitive: string[];
  object: StateObject;
  arrayOfObject: StateArrayOfObject[];
}

let renderForce = 0;
let primitiveCount = 1;
let arrayOfObjectCount = 2;

export default class PropsStatesLifes extends React.Component<Props, StateGrandFather> {

  constructor(props: Props) {
    super(props);

    this.state = {
      primitive: 'primitive-v' + primitiveCount,
      arrayOfPrimitive: ['1', '2', '3'],
      object: {
        property: 'property-v1'
      },
      arrayOfObject: [
        {
          property: '1'
        },
        {
          property: arrayOfObjectCount + ''
        }
      ]
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    renderForce++;
    return <div className="lifes-ctn">
      <div className="lifes lifes--grand-parent">
        <div className="lifes__name">
          <h2>Grand parent (<NewRender key={renderForce} />) TODO faire pareil en angular</h2>
        </div>
        <div className="lifes__name">
          <button onClick={this._updateState.bind(this, 'primitive-up')}>update primitive (sans setState, voir dans console)</button>
          <button onClick={this._updateState.bind(this, 'primitive-set')}>setState primitive</button>
          <button onClick={this._updateState.bind(this, 'array-primitive-set')}>setState array-primitive</button>
          <button onClick={this._updateState.bind(this, 'item-array-object-set')}>setState item in array of object</button>
        </div>
        <br />
        <div className="lifes__inner">
          <div>
            <h3>Props</h3>
            <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(this.props, null, 2)}
        </pre>
          </div>
          <div>
            <h3>State</h3>
            <pre className="layout__item u-1/2-lap-and-up">
            {JSON.stringify(this.state, null, 2)}
        </pre>
          </div>
          <div>
            <PropsStatesLifesItem item={this.state.arrayOfObject[0]} />
            <PropsStatesLifesItemPure item={this.state.arrayOfObject[1]} />
            <PropsStatesLifesItemPure property={this.state.arrayOfObject[1].property} />
          </div>
        </div>
        <div>
          <h4>Conclusions :</h4>
          <ul>
            <li>un changement du state sans setState, modifie bien la valeur mais le rendu n'est pas actualisé</li>
            <li>un changement de prop/state déclenche le rendu de tous ses enfants</li>
            <li>on peut utilisé PureComponent mais cela ne fonctionne pas avec propriété imbriqué</li>
            <li>un changement de prop ou state dans un enfant n'affecte jamais le parent</li>
          </ul>
        </div>
      </div>
      <PropsStatesLifesParent {...this.state} />
    </div>;
  }

  _updateState(type: string) {
    switch (type) {
      case 'primitive-up':
        primitiveCount++;
        (this.state.primitive as any) = 'primitive-v' + primitiveCount;
        console.log(this.state.primitive);
        break;
      case 'primitive-set':
        primitiveCount++;
        this.setState({
          primitive: 'primitive-v' + primitiveCount
        });
        break;
      case 'array-primitive-set':
        this.setState({
          arrayOfPrimitive: this.state.arrayOfPrimitive.map(item => (+item) + 1 + '')
        });
        break;

      case 'item-array-object-set':
        arrayOfObjectCount++;
        this.state.arrayOfObject[1].property = arrayOfObjectCount + '';
        this.setState({
          arrayOfObject: this.state.arrayOfObject
        });
        break;
    }
  }
}
