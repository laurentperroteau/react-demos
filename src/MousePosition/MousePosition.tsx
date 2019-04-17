import React from 'react';

type Props = {
  onUpdate?: Function;
}

export type MousePositionType = {
  x: number;
  y: number;
}

export default class MousePosition extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);

    this._onMouseMove = this._onMouseMove.bind(this); // bind function once
  }

  componentDidMount() {
    document.addEventListener('mousemove', this._onMouseMove, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this._onMouseMove, false);
  }

  render() {
    return '';
  }

  _onMouseMove(e: any) {
    if (this.props.onUpdate) {
      this.props.onUpdate({ x: e.clientX, y: e.clientY });
    }
  }
}
