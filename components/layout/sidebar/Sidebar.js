import * as Styled from './styles';

import { GriddyContext } from 'components/layout/Layout';

import { useEffect, useContext } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Sidebar({
  links,
  showSidebar,
  setShowSidebar,
  children,
  quiz = false,
}) {
  const controls = useAnimation();
  const router = useRouter();
  const { windowWidth } = useContext(GriddyContext);

  useEffect(
    () => controls.start(`${showSidebar ? 'visible' : 'hidden'}`),
    [showSidebar]
  );

  const sidebarVariants = (windowWidth, quiz) => {
    const visible = {};
    if (quiz) {
      if (windowWidth < 540) {
        visible.width = 180;
        visible.height = 350;
      } else {
        visible.width = 230;
        visible.height = 430;
      }
    } else {
      if (windowWidth < 540) {
        visible.width = 180;
        visible.height = 280;
      } else {
        visible.width = 260;
        visible.height = 370;
      }
    }

    return {
      hidden: {
        width: windowWidth < 540 ? 43 : 52,
        height: windowWidth < 540 ? 45 : 52,
      },
      visible,
    };
  };

  const renderLinks = () =>
    links.map(({ text, href }) => (
      <li key={`sidebar-${text}`}>
        <Styled.Links
          href={href}
          className={router.pathname === href && 'active'}
        >
          {text}
        </Styled.Links>
      </li>
    ));

  return (
    <Styled.Sidebar
      animate={controls}
      initial="hidden"
      variants={sidebarVariants(windowWidth, quiz)}
    >
      <Styled.MenuContainer
        showSidebar={showSidebar}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Styled.MenuBar showSidebar={showSidebar} />
      </Styled.MenuContainer>
      <AnimatePresence>
        {showSidebar && (
          <Styled.MenuWrapper>
            <Styled.MenuHeader margin={'0'} padding={'0.8rem 1.2rem 0'}>
              {children}
            </Styled.MenuHeader>
            <Styled.MenuList>{renderLinks()}</Styled.MenuList>
          </Styled.MenuWrapper>
        )}
      </AnimatePresence>
    </Styled.Sidebar>
  );
}
