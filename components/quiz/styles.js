import styled from 'styled-components';
import { motion } from 'framer-motion';
import { header, flexColumn, flexCenter, flexBetween } from 'styles/Mixins';

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

export const PopUp = styled.div`
  position: relative;
`;

export const Message = styled(motion.div)`
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  border-radius: 0.6rem;
  padding: 1.5rem 5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: -92%;
  cursor: pointer;
  width: 50rem;

  svg {
    height: 2rem;
    width: 2rem;
    fill: white;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }

  @media screen and (max-width: 48em) {
    width: 28rem;
    left: -30%;
  }

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

export const MessageTitle = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  margin: 1rem 0;
`;

export const MessageDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.4rem;
  margin: ${({ margin }) => margin};

  a {
    text-decoration: underline;
  }
`;

export const DotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const MessageVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: [0.9, 1.1, 1], opacity: 1, transition: { duration: 0.6 } },
};

export const CloseIcon = () => {
  return (
    <svg viewBox="0 0 26 26" focusable="true">
      <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
    </svg>
  );
};
