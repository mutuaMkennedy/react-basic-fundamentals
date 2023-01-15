import React from "react";

const withCounter = (wrappedComponent) => {
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
        const {count}=  this.state
      return <wrappedComponent count={count}/>;
    }
  };
};

export default withCounter;
