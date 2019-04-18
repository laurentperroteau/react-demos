import React, { Component } from 'react';
import './JSFunctionsExemple.ts';

class ReactIsJustFunctions extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      prop: {
        text: 'prop du grand parent'
      }
    };

    setTimeout(() => {
      this.setState({
        prop: {
          text: 'nouveau prop du grand parent'
        }
      })
    }, 3000);

    setTimeout(() => {
      console.log('state du grand parent', this.state);
    }, 9000);
  }

  render() {
    return [
      <div
        dangerouslySetInnerHTML={{ __html: parentComponent(this.state.prop) }}>
      </div>,
      <div>
        <h4>Conclusions :</h4>
        <ul>
          <li>Javascript passe les valeurs aux fonctions "par référence" ("par valeur" si primitive)</li>
          <li>Les composants React ne sont que des fonctions qui renvoi du HTML à la différence prêt que les paramètres sont toujours copiés (deep copie)</li>
        </ul>
      </div>
    ];
  }
}

const parentComponent = (param: any) => {
  setTimeout(() => {
    console.log('param du parent', param);
  }, 9000);

  return `<div>Parent component HTML avec prop : <strong>${param.text}</strong></div>
          ${childComponent(param)}`
};

const childComponent = (param: any) => {

  setTimeout(() => {
    param.text = 'prop du grand parent modifié par child component';
  }, 6000);

  return `<div>Child component HTML avec prop : <strong>${param.text}</strong></div>`
};

export default ReactIsJustFunctions;
