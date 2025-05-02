// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const Themecontext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  );
};

// Custom hook for convenience
export const useTheme = () => useContext(Themecontext);
