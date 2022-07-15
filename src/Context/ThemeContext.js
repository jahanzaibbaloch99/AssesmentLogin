import React, {createContext, useState} from 'react';
export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
