import { StyledThemeToggler, MoonIcon, SunIcon } from './styles';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';

export default function ThemeToggler() {
  const { theme, themeToggler } = useContext(GriddyContext);

  return (
    <StyledThemeToggler
      onClick={(e) => {
        e.stopPropagation();
        themeToggler();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'dark' ? (
        <MoonIcon height="20" width="20" />
      ) : (
        <SunIcon height="20" width="20" />
      )}
    </StyledThemeToggler>
  );
}
