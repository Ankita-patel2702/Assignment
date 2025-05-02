
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function AuthStatus() {
  const { user, login, logout } = useAuth();
  const [inputName, setInputName] = useState('');

  if (user) {
    return (
      <div>
        <h2>Welcome, {user.name}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Please log in</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={() => login(inputName)} disabled={!inputName.trim()}>
        Log In
      </button>
    </div>
  );
}

export default AuthStatus;
