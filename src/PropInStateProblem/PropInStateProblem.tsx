import React from 'react';

import PropInStateProblemChild from './PropInStateProblemChild';

type Props = {}

type State = {
  parentState: string;
}

export default class PropInStateProblem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      parentState: 'valeur initial'
    };
  }

  componentWillMount(): void {
    setTimeout(() => {
      this.setState({
        parentState: 'valeur changer dans parent après 3 secondes'
      })
    }, 3000);

    setTimeout(() => {
      this.setState({
        parentState: 'valeur changer dans parent après 6 secondes'
      })
    }, 6000);
  }

  render() {
    return <div>
      State du parent : {this.state.parentState}
      <hr />
      <PropInStateProblemChild parentState={this.state.parentState} />
    </div>;
  }
}
