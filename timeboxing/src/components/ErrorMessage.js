import React from "react";

class ErrorMessage extends React.Component {
  render() {
    const { message, children } = this.props;
    return this.state.hasError ? message : children;
  }
}

export default ErrorMessage;
