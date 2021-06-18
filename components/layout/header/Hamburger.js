import * as Styled from './styles';

import ThemeToggler from './ThemeToggler';

import { GriddyContext } from 'components/layout/Layout';

import { useContext, useState, useEffect, useRef } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';

export default function Hamburger({ renderLinks }) {
  const { windowWidth } = useContext(GriddyContext);

  const hamMenuRef = useRef();

  const [showHamMenu, setShowHamMenu] = useState(false);

  useEffect(() => windowWidth > 768 && setShowHamMenu(false), [windowWidth]);

  useEffect(() => {
    const onOutsideClick = (e) =>
      (hamMenuRef.current && hamMenuRef.current.contains(e.target)) ||
      setShowHamMenu(false);

    showHamMenu && document.addEventListener('click', onOutsideClick);

    return () => document.removeEventListener('click', onOutsideClick);
  }, [showHamMenu]);

  console.log(showHamMenu);

  return (
    <>
      <Styled.Hamburger onClick={() => setShowHamMenu(!showHamMenu)}>
        <Styled.HamBar showHamMenu={showHamMenu} />
      </Styled.Hamburger>

      <AnimatePresence>
        {showHamMenu && (
          <Styled.HamMenu
            animate={showHamMenu ? 'visible' : 'hidden'}
            initial="hidden"
            exit="hidden"
            variants={Styled.HamMenuVariants}
            ref={hamMenuRef}
          >
            <Styled.HamList margin="2.4rem 0 1.6rem">
              <ThemeToggler />
              {renderLinks('ham')}
            </Styled.HamList>
          </Styled.HamMenu>
        )}
      </AnimatePresence>
    </>
  );
}
