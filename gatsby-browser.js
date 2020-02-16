import React from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './src/components/global-styles';

const App = ({ children }) => {
  const { value: isDark } = useDarkMode();

  return (
    <ThemeProvider
      theme={{
        textColor: isDark ? 'white' : 'black',
        backgroundColor: isDark ? 'black' : 'white',
        primaryColor: isDark ? 'hotpink' : '#1c49ce',
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
