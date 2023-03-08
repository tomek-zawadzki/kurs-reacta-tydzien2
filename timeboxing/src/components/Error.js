import React from "react";
import ErrorMessage from "./ErrorMessage";

class Error extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("WYSTĄPIŁ BŁĄD!!!", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
  }
}

export default Error;
