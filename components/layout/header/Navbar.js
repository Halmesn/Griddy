import * as Styled from './styles';

import ThemeToggler from './ThemeToggler';
import Hamburger from './Hamburger';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { width } = useContext(GriddyContext);
  const router = useRouter();

  const links = [
    { text: 'Learn', href: '/learn' },
    { text: 'Quiz', href: '/quiz' },
    { text: 'About', href: '/about' },
  ];

  const renderLinks = (position) =>
    links.map(({ text, href }) => (
      <li key={`${position === 'nav' ? 'nav' : 'ham'}-link-${text}`}>
        <Styled.Links
          href={href}
          className={router.pathname === href && 'active'}
          position={position}
        >
          {text}
        </Styled.Links>
      </li>
    ));

  return (
    <Styled.Navbar>
      <Link href="/">
        <Styled.Header>Griddy</Styled.Header>
      </Link>

      {width <= 768 ? (
        <Hamburger renderLinks={renderLinks} />
      ) : (
        <Styled.NavList>
          {renderLinks('nav')}
          <ThemeToggler />
        </Styled.NavList>
      )}
    </Styled.Navbar>
  );
}
