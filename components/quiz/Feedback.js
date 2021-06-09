import * as Styled from './styles';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Feedback({ feedback, index }) {
  const {
    userChoice,
    choices,
    correctAnswer,
    isShowing,
    feedbackText,
    feedbackLink,
  } = feedback;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((previousState) => !previousState);
  const animation = isOpen ? 'open' : 'close';

  const renderFeedback = () => {
    switch (index) {
      case 1:
        return (
          <>
            <Styled.MessageTitle fontSize="1.4rem">
              You wrote:
            </Styled.MessageTitle>
            <Styled.MessageDescription fontSize="1.2rem">
              "{userChoice.line1}"
            </Styled.MessageDescription>
            <Styled.MessageDescription fontSize="1.2rem">
              "{userChoice.line2}"
            </Styled.MessageDescription>
            <Styled.MessageDescription fontSize="1.2rem">
              "{userChoice.line3}"
            </Styled.MessageDescription>
            <Styled.MessageTitle fontSize="1.4rem">
              The correct answer is:
            </Styled.MessageTitle>
            <Styled.MessageDescription fontSize="1.2rem">
              "{correctAnswer.line1}"
            </Styled.MessageDescription>
            <Styled.MessageDescription fontSize="1.2rem">
              "{correctAnswer.line2}"
            </Styled.MessageDescription>
            <Styled.MessageDescription fontSize="1.2rem" margin="0 0 1rem 0">
              "{correctAnswer.line3}"
            </Styled.MessageDescription>
          </>
        );
      default:
        return (
          <>
            <Styled.MessageTitle fontSize="1.4rem">
              The correct answer is choice {correctAnswer + 1}:
            </Styled.MessageTitle>

            <Styled.MessageDescription fontSize="1.2rem">
              "{choices && choices[correctAnswer]}"
            </Styled.MessageDescription>

            <Styled.MessageTitle fontSize="1.4rem">
              {feedbackText}
            </Styled.MessageTitle>
          </>
        );
    }
  };

  return (
    isShowing && (
      <Styled.Feedback>
        <Styled.FeedbackTitle onClick={toggleOpen}>
          {`Your answer to question ${index + 1} is wrong`}
          <motion.div animate={animation} variants={Styled.IconVariants}>
            <Styled.CloseIcon />
          </motion.div>
        </Styled.FeedbackTitle>
        <Styled.FeedbackBody
          animate={animation}
          variants={Styled.FeedbackBodyVariants}
        >
          <span>
            {renderFeedback()}
            <Styled.MessageDescription>
              <Link href={feedbackLink}>Go to lesson</Link>
            </Styled.MessageDescription>
          </span>
        </Styled.FeedbackBody>
      </Styled.Feedback>
    )
  );
}
