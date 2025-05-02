import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>

      {/* <Link to="/about" style={{ margin: '10px' }}>About</Link> */}
    </div>
  );
}

export default Home;
