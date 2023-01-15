import React from "react";

const withCounter = (WrappedComponent) => {
  return class extends React.Component {
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
      return <WrappedComponent count={count} increment={increment} />;
    }
  };
};

export default withCounter;
