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

  // used to copy props to state
  static getDerivedStateFromProps(props, state) {
    //  if (props.foo && state.foo != props.foo){
    //    return{
    //      foo: props.foo
    //    }
    //  }
    return null;
  }

  // Called after render/when component is added to the dom
  // Usecase: side effects E.g. API Calls, Event listeners, Dom mutation etc
  componentDidMount() {
    console.log("Component mounted");
  }

  // // Controls whether to re-render the component if props or state changes
  // // Ussually a perfomance optimisation tool
  // // Only use this when absolutely necessary
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  // Capture information not stored in state
  // Gets passed to component did update as snapshot
  // Usecase: Get previous scroll or cursor position so you can restore the earlier view
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

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

  // Called when the component has been updated
  // Usecase: update the DOM when data from an API is availlable
  // contd: restore snpshot
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component updated");
    return null;
  }

  // Gracefully handle any errors in thsis Component
  // Also used as part of creating error boundaries for use in functional components
  componentDidCatch(error, info) {
    // do stuff
    return null;
  }
}

export default App;
