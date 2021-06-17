import styled from 'styled-components';
import { motion } from 'framer-motion';
import { header, description } from 'styles/Mixins';

export const AboutContent = styled(motion.section)`
  padding: 4rem 0;
  transition: padding 0.3s ease-in-out;
  max-width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 61.25em) {
    text-align: center;
  }

  @media only screen and (max-width: 31.25em) {
    padding: 4rem 1.6rem;
    transition: padding 0.15s ease-in-out;
  }
`;

export const Header = styled(motion.h2)`
  // use h1 for style but use h2 for semantic
  ${header('h1')}
`;

export const Description = styled(motion.p)`
  ${description}
`;

export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0 0.8rem;
  margin: ${({ margin }) => margin || '1.6rem 0'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 61.25em) {
    align-items: center;
  }
`;

export const LinkItem = styled(motion.li)`
  margin: 0.8rem 0;
  width: max-content;
`;

export const Link = styled.a`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.link};
  text-decoration-color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
`;

export const ContentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
