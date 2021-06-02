import * as Styled from './styles';

import ThemeToggler from './ThemeToggler';
import HamburgerMenu from './HamburgerMenu';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { width } = useContext(GriddyContext);
  const router = useRouter();

  const navLinks = [
    { text: 'Learn', href: '/learn' },
    { text: 'Quiz', href: '/quiz' },
    { text: 'About', href: '/about' },
  ];

  const renderNavLinks = () =>
    navLinks.map(({ text, href }) => (
      <li key={`nav-link-${text}`}>
        <Styled.NavLink
          href={href}
          className={router.pathname === href && 'active'}
        >
          {text}
        </Styled.NavLink>
      </li>
    ));

  return (
    <Styled.Navbar>
      <Link href="/">
        <Styled.Header>Griddy</Styled.Header>
      </Link>
      {width <= 768 ? (
        <HamburgerMenu />
      ) : (
        <Styled.LinkContainer>
          {renderNavLinks()}
          <ThemeToggler />
        </Styled.LinkContainer>
      )}
    </Styled.Navbar>
  );
}
