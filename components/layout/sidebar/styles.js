import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { header, flexBetween } from 'styles/Mixins';
import { HamBar } from 'components/layout/header/styles';
import Link from 'next/link';

export const Sidebar = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.lowContrastBackground};
  overflow: hidden;
  border-radius: 0 1.2rem 1.2rem 0;
  padding: 1.3rem 1.2rem 1.2rem 1.2rem;
  z-index: 1;
  top: 11.2rem;
  left: 0;
  transition: top 0.3s, left 0.3s;
  box-shadow: ${({ theme }) => theme.misc.shadow};

  @media only screen and (max-width: 48em) {
    top: 6.4rem;
    transition: top 0.3s, left 0.3s;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  cursor: pointer;
  height: 2.2rem;

  ${({ showSidebar }) =>
    showSidebar &&
    css`
      top: 2.4rem;
      right: 1.4rem;
    `}
`;

export const MenuBar = styled(HamBar)`
  ${({ showSidebar }) =>
    showSidebar &&
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

export const MenuWrapper = styled(motion.div)``;

export const MenuList = styled.ul`
  li {
    margin-top: 2.4rem;
  }
`;

export const MenuHeader = styled.h2`
  ${header('h2')}
`;

const NextLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const Links = styled(NextLink)`
  user-select: none;

  ${flexBetween}
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 1.2rem 0.48rem 1.2rem 1.2rem;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  border-radius: 0.8rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  white-space: nowrap;

  :hover {
    background: ${({ theme }) => theme.colors.highlighted};
  }
  &.active {
    background: ${({ theme }) => theme.colors.selected};
  }
`;

export const QuizSidebarVariants = {
  hidden: { width: 52, height: 52 },
  visible: { width: 230, height: 430 },
};

export const LessonSidebarVariants = {
  hidden: { width: 52, height: 52 },
  visible: { width: 260, height: 370 },
};
