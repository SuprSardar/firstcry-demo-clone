import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.clear();
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error || this.state.errorInfo) {
      return (
        <div className="Error">
          <div className="h-screen w-screen flex gap-4 flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">Something went wrong.</h2>

            <div className="flex gap-4">
              <button className="button border" onClick={() => window.location.replace("/")}>
                Reload
              </button>
              <button className="button border" onClick={() => console.log(this.state.error)}>
                Crash Report
              </button>
            </div>
          </div>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
