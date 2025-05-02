import React from 'react';
import { ProviderId, signInWithPopup } from 'firebase/auth';
//import {auth,provider} from 'firebase'
import { auth,provider } from './firebase'

function Login({ setUser }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
