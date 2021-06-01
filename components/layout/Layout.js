import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/Themes';
import { GlobalStyles } from 'styles/GlobalStyles';

import { useDarkMode } from 'hooks/useDarkMode';
import { useWindowWidth } from 'hooks/useWindowWidth';

import { createContext } from 'react';
import Header from './header/Header';

export const GriddyContext = createContext();

export default function Layout({ children }) {
  const [theme, themeToggler] = useDarkMode();
  const width = useWindowWidth();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <GriddyContext.Provider value={{ theme, themeToggler, width }}>
        <Header />
        <main>{children}</main>
      </GriddyContext.Provider>
    </ThemeProvider>
  );
}
