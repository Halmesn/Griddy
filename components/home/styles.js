import styled from 'styled-components';
import { motion } from 'framer-motion';
import { header, description } from 'styles/Mixins';

export const HomeContent = styled(motion.section)`
  padding: 4rem 0;
  transition: padding 0.3s ease-in-out;
  display: grid;
  max-width: 80%;
  grid-template-columns: 40rem auto;
  grid-template-rows: auto auto;
  grid-gap: 6.4rem 1.6rem;
  margin: 0 auto;

  @media screen and (max-width: 61.25em) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    text-align: center;
    grid-gap: 1.6rem;
  }

  @media screen and (max-width: 31.25em) {
    padding: 4rem 1.6rem;
  }
`;

export const TextContainer = styled(motion.div)`
  @media only screen and (max-width: 61.25em) {
    justify-self: center;
  }
`;

export const FlexContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled(motion.h2)`
  // use h1 for style but use h2 for semantic
  ${header('h1')}
`;

export const Description = styled(motion.p)`
  ${description}
`;
