import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { header, description, flexColumn, flexCenter } from 'styles/Mixins';
import {
  CodeContainer as codeContainer,
  Code as code,
  CodeInput as codeInput,
} from 'components/quiz/styles';

export const LessonContainer = styled(motion.section)`
  padding: 4.8rem 0 2rem;
  transition: padding 0.15s ease-in-out;
  overflow-x: hidden;
`;

export const Header = styled.h2`
  ${header('h1')}
`;

export const SubHeader = styled.h2`
  ${header('h2')}
`;

export const Description = styled.p`
  ${description}
`;

export const FlexContainer = styled.div`
  display: flex;
  width: ${({ width }) => width};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  padding: ${({ padding }) => padding};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'sandbox info'
    'css html';

  @media only screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'info'
      'sandbox'
      'css'
      'html';
  }
`;

export const GridItem = styled.div`
  padding: 0.8rem 1.6rem;
  grid-area: ${({ gridArea }) => gridArea};

  @media screen and (max-width: 48em) {
    padding: 0.8rem 3.2rem;
  }
`;

export const Sandbox = styled.div`
  height: ${({ height }) => height || '40rem'};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: border 0.15s;
`;

export const SandboxGrid = styled.div`
  display: ${({ display }) => display};
  grid-template-columns: ${({ templateCols }) => templateCols};
  grid-template-rows: ${({ templateRows }) => templateRows};
  height: 100%;
  overflow: auto;

  ${({ lessonIndex }) =>
    lessonIndex === 2 &&
    css`
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 133px 133px 133px;
    `}
`;

export const FourLeafClover = styled(motion.div)`
  height: 4rem;
  width: 4rem;
  margin: 1rem;
  font-size: 4rem;
  justify-self: ${({ justifySelf }) => justifySelf || 'center'};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};

  ${flexCenter}
`;

export const CodeSnippet = styled.span`
  background: ${({ theme }) => theme.colors.lowContrastBackground};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 1.2rem;
  transition: 0.15s;
  margin: ${({ margin }) => margin || '0.32rem 0.56rem'};
  padding: 0.32rem 0.48rem;
  border-radius: 0.8rem;
  white-space: nowrap;
`;

export const CodeContainer = styled(codeContainer)``;

export const Code = styled(code)``;

export const CodeInput = styled(codeInput)``;
