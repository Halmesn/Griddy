import styled from 'styled-components';
import { motion } from 'framer-motion';
import { header, flexColumn, flexCenter } from 'styles/Mixins';

export const QuizForm = styled(motion.div)`
  ${flexColumn}
`;

export const Header = styled(motion.h2)`
  ${header('h1')}
`;

export const SubHeader = styled(motion.h2)`
  ${header('h2')}
`;

export const CodeContainer = styled.div`
  background: ${({ theme }) => theme.colors.lowContrastBackground};
  padding: 1.6rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.15s;
  line-height: 2.8rem;
  margin: ${({ margin }) => margin};
  text-align: left;
`;

export const Code = styled.code`
  display: block;
  text-indent: ${({ textIndent }) => textIndent};
  font-family: ${({ theme }) => theme.fonts.code};
`;

export const AnswerContainer = styled.div`
  margin: 0.55rem 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RadioButton = styled(motion.div)`
  margin: ${({ margin }) => margin};
  min-height: 2.4rem;
  min-width: 2.4rem;
  border-radius: 16rem;
  ${flexCenter}
  cursor: pointer;
  background: ${({ theme }) => theme.colors.lowContrastBackground};
  transition: 0.2s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.colors.highlighted};
  }
`;

export const RadioDot = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary};
  min-height: 1rem;
  min-width: 1rem;
  border-radius: 16rem;
  transition: background 0.15s;
`;

export const Answer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.lowContrastBackground};
  padding: 1.6rem;
  text-align: left;
  border-radius: 1.6rem;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.15s, background 0.15s;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;
`;

export const MessagePopUp = styled.div`
  position: relative;
`;

export const MessageContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  border-radius: 0.6rem;
  padding: 1.2rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 23%;

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.buttonPrimary} transparent
      transparent transparent;
  }
`;

export const DotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const MessageVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: [0.8, 1.3, 1], opacity: 1 },
};
