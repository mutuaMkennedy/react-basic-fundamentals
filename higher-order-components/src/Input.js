import React from "react";

class Input extends React.Component {
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
        <input onKeyUp={increment} />
        <div>You pressed your keyboard : {count} times</div>
      </>
    );
  }
}

export default Input;
