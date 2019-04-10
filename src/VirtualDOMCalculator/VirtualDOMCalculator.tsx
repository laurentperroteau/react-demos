import React  from 'react';

type Props = {}

type State = {
  count: number;
}

export default class VirtualDOMCalculator extends React.Component<Props, State> {
  input: any;
  countHTML = 0;
  countRender = 0;

  constructor(props: Props) {
    super(props);

    this.input = React.createRef();

    this.state = {
      count: 1
    };
  }

  render() {
    this.countRender++;

    return <div>
      <div>Ajouter une quantité au compteur:<br />
        <input type="text" ref={this.input} />
        <button id="add" onClick={this._addToCounter.bind(this)}>Add</button>
        <br /><em>Ajouter 1 puis zéro</em>
      </div>
      <h2>Résultats:</h2>
      <ul>
        <li>Compteur virtual DOM: {this.state.count} (si on ajoute zéro, le DOM n'est pas actualisé)</li>
        <li>Compteur DOM: <span id="count">{this.state.count}</span> (si on ajoute zéro, le DOM est <strong>actualisé</strong>)</li>
        <li>Compte render: {this.countRender}</li>
      </ul>

    </div>;
  }

  _addToCounter() {
    const count = this.state.count + +this.input.current.value;
    this.setState({count});

    const countElem = document.getElementById('count');

    if (countElem) {
      countElem.innerHTML = count + '';
    }
  }
}
