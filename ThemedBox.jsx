// ThemedBox.js
import React from 'react';
import { useTheme } from './Themecontext';

function ThemedBox() {
  const { theme } = useTheme();

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '2rem',
    marginTop: '1rem',
    borderRadius: '8px',
  };

  return <div style={styles}>This box changes with the theme!</div>;
}

export default ThemedBox;
