import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  // The constructor method is called first when the component initializes
  // It initialize the local state of a component
  // Allow us to bind our compoent event handlers so we can modify state
  constructor(props) {
    // super method allow us to acces this.props in out component
    super(props);
    this.state = {
      counter: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Called after render/when component is added to the dom
  // Usefull to do things that require DOM access
  componentDidMount() {
    console.log("Component mounted");
  }

  // // Controls whether to re-render the component if props or state changes
  // // Ussually a perfomance optimisation tool
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    const increment = this.increment;
    const decrement = this.decrement;

    return (
      <>
        <span>{this.state.counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
    );
  }
}

export default App;
