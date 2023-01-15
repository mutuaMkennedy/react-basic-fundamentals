import React from "react";
import withCounter from "./withCounter.js";

class Button extends React.Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <button onClick={increment}>Click to increment</button>
        <div>You clicked me : {count} times</div>
      </>
    );
  }
}

export default withCounter(Button);
