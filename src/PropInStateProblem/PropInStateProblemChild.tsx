import React from 'react';

type Props = {
  parentState: string;
}

type State = {
  parentStateInChildState: string;
}

export default class PropInStateProblemChild extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      parentStateInChildState: props.parentState
    };
  }

  render() {
    return <div>
      Copie du prop dans state enfant : {this.state.parentStateInChildState} (jamais mis à jour)
    </div>;
  }
}
