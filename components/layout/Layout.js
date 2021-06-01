import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/Themes';
import { GlobalStyles } from 'styles/GlobalStyles';

import { useDarkMode } from 'hooks/useDarkMode';

export default function Layout({ children }) {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  );
}
