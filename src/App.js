import React, { useState } from 'react';
import DarkMode from 'DarkMode';
import {lightTheme, darkTheme} from 'theme';
import { ThemeProvider } from 'styled-components';


const App = () => {
  const [toggle,setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle)
  }
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <DarkMode onToggle={onToggle} toggle={toggle}/>
    </ThemeProvider>
  );
};

export default App;