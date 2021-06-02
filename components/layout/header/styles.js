import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { flexBetween, header } from 'styles/Mixins';
import Link from 'next/link';

export const Navbar = styled(motion.nav)`
  margin: 0 auto;
  max-width: 80%;
  box-sizing: border-box;
  color: white;
  background: transparent;
  ${flexBetween}

  @media only screen and (max-width: 768px) {
    width: auto;
    margin: 0 1.2rem;
  }
`;

export const Header = styled(motion.h1)`
  ${header('h1')}
  cursor: pointer;
`;

export const LinkContainer = styled.ul`
  ${flexBetween}
  list-style: none;
`;

const NextLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const NavLink = styled(NextLink)`
  color: ${({ theme }) => theme.colors.inactive};
  font-size: 2.4rem;
  margin: 0.8rem 0.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: normal;
  transition: 150ms;

  :hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  z-index: 2;
  right: 1.6rem;
  top: 2rem;
  cursor: pointer;
  height: 2.2rem;
`;

export const HamBar = styled.div`
  position: relative;

  &,
  ::after,
  ::before {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 2.4rem;
    height: 2px;
    display: inline-block;
    transition: 0.2s ease-in-out;
  }

  ::after,
  ::before {
    content: '';
    position: absolute;
  }

  ::before {
    top: -0.8rem;
    left: 0;
  }

  ::after {
    top: 0.8rem;
    left: 0;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      & {
        background-color: transparent;
      }
      ::before {
        top: 0;
        transform: rotate(135deg);
      }
      ::after {
        top: 0;
        transform: rotate(-135deg);
      }
    `}
`;

export const StyledThemeToggler = styled(motion.button)`
  background: transparent;
  border: 0;
  padding: 0;
  height: 1.9rem;
  width: 1.9rem;
  cursor: pointer;
  margin: ${({ margin }) => margin || '0 1rem'};
`;

export const MoonIcon = ({ height, width, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1.6rem'}
    height={height || '1.6rem'}
    fill={fill ? strokeColor : 'white'}
    viewBox="0 0 16 16"
  >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
  </svg>
);

export const SunIcon = ({ height, width, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '1.6rem'}
    height={height || '1.6rem'}
    fill={fill || 'black'}
    viewBox="0 0 16 16"
  >
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </svg>
);
