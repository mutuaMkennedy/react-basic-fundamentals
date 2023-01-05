import React from "react";
import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Do something:
    // Perhaps log to external error handling service
  }

  render() {
    const error = this.state.hasError;
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    } else return this.props.children;
  }
}

function OverheatingCar() {
  throw new Error("Engine Overheated!");
}

function fallbackComponent() {
  return <div>Engine Overheated</div>;
}

function App() {
  const [overheat, setOveheat] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setOveheat(true)}>Pump the gas!</button>
      <ErrorBoundary FallbackComponent={fallbackComponent}>
        {overheat ? <OverheatingCar /> : "Move faster!"}
      </ErrorBoundary>
    </div>
  );
}

export default App;
