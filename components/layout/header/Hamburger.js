import * as Styled from './styles';

import ThemeToggler from './ThemeToggler';

import { GriddyContext } from 'components/layout/Layout';

import { useContext, useState, useEffect, useRef } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';

export default function Hamburger({ renderLinks }) {
  const { width } = useContext(GriddyContext);

  const controls = useAnimation();
  const hamMenuRef = useRef();

  const [showHamMenu, setShowHamMenu] = useState(false);

  useEffect(
    () => controls.start(`${showHamMenu ? 'visible' : 'hidden'}`),
    [showHamMenu]
  );

  useEffect(() => width > 768 && setShowHamMenu(false), [width]);

  useEffect(() => {
    const onOutsideClick = (e) => {
      e.stopPropagation();
      (hamMenuRef.current && hamMenuRef.current.contains(e.target)) ||
        setShowHamMenu(false);
    };

    showHamMenu && document.addEventListener('click', onOutsideClick);

    return () => document.removeEventListener('click', onOutsideClick);
  }, [showHamMenu]);

  return (
    <>
      <Styled.Hamburger onClick={() => setShowHamMenu(!showHamMenu)}>
        <Styled.HamBar showHamMenu={showHamMenu} />
      </Styled.Hamburger>

      <AnimatePresence>
        {showHamMenu && (
          <Styled.HamMenu
            animate={controls}
            initial="hidden"
            exit={{ opacity: 0, x: 192 }}
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
