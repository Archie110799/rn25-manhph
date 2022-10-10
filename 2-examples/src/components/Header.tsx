// tsrce
import React, { Component } from "react";

type Props = {
  isLoginProps: boolean;
};

type State = {};

class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <button>{this.props.isLoginProps ? "Log out" : "Log in"}</button>
      </>
    );
  }
}

export default Header;
