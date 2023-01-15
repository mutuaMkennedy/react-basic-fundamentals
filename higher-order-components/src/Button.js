import React from "react";
import withCounter from "./withCounter.js";

class Button extends React.Component {
  render() {
    const { count, increment, value } = this.props;
    return (
      <>
        <button onClick={increment}>{value}</button>
        <div>You clicked me : {count} times</div>
      </>
    );
  }
}

export default withCounter(Button, 5);
