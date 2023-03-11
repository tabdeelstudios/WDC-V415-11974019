import React from "react";

class CounterClass extends React.Component {
  state = { count: 0 };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
