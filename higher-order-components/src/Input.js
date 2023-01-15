import React from "react";
import withCounter from "./withCounter.js";

class Input extends React.Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <input onKeyUp={increment} />
        <div>You pressed your keyboard : {count} times</div>
      </>
    );
  }
}

export default withCounter(Input);
