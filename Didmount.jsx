// Life Cylcle Method
// Task 1: Create a class component that fetches data from an API when the component
// mounts using componentDidMount(). Display the data in the component.

import React, { Component } from 'react';

class Didmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos') // Example API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Fetched Data</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Didmount;
