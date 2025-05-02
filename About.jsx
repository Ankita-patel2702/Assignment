import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      {/* <Link to="/" style={{ margin: '10px' }}>Home</Link> */}
    </div>
  );
}

export default About;
