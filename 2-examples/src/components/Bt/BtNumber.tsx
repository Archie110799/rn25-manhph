import React, { Component } from "react";

type Props = {};

type State = {
  numberState: number;
  isShow : boolean
};

class BtNumber extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      numberState: 0,
      isShow : true
    };

    console.log('constuctor');
    
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({ numberState: this.state.numberState + 1, isShow : !this.state.isShow });
  };

  render() {
    return (
      <div>
        <p>BtNumber {this.state.numberState}</p>
        {this.state.isShow ? 1 : 0}
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default BtNumber;
