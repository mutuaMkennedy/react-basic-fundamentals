import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    const increment = this.increment;
    return (
      <>
        <button onClick={increment}>Click to increment</button>
        <div>You clicked me : {count} times</div>
      </>
    );
  }
}

export default Button;
