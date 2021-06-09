import * as Styled from './styles';

import { useEffect } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Sidebar({
  links,
  showSidebar,
  setShowSidebar,
  children,
  quiz,
}) {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(
    () => controls.start(`${showSidebar ? 'visible' : 'hidden'}`),
    [showSidebar]
  );

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
      variants={
        quiz ? Styled.QuizSidebarVariants : Styled.LessonSidebarVariants
      }
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
