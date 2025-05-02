// Life Cylcle Method
// Task 2:
// Implement a component that logs a message to the console when it updates using
// componentDidUpdate(). Log another message when the component unmounts
// using componentWillUnmount().

import React, { Component } from 'react';

class DidmountData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did updated.');
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmounted.');
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Logger</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default DidmountData;
