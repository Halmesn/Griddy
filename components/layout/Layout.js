import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/Themes';
import { GlobalStyles } from 'styles/GlobalStyles';

import { useDarkMode } from 'hooks/useDarkMode';
import { useWindowWidth } from 'hooks/useWindowWidth';

import { createContext } from 'react';
import Navbar from './header/Navbar';

export const GriddyContext = createContext();

export default function Layout({ children }) {
  const [theme, themeToggler] = useDarkMode();
  const windowWidth = useWindowWidth();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <GriddyContext.Provider value={{ theme, themeToggler, windowWidth }}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </GriddyContext.Provider>
    </ThemeProvider>
  );
}
