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
        let choiceArray = ['', '', ''];
        if (Object.keys(userChoice).length !== 0)
          choiceArray = Object.values(userChoice);
        return (
          <>
            <Styled.MessageTitle fontSize="1.4rem">
              You wrote:
            </Styled.MessageTitle>

            {choiceArray.map((choice, index) => (
              <Styled.MessageDescription
                fontSize="1.2rem"
                key={`${choice}-${index}`}
              >
                "{choice}"
              </Styled.MessageDescription>
            ))}

            <Styled.MessageTitle fontSize="1.4rem">
              The correct answer is:
            </Styled.MessageTitle>

            {Object.values(correctAnswer).map((answer) => (
              <Styled.MessageDescription fontSize="1.2rem" key={answer}>
                "{answer}"
              </Styled.MessageDescription>
            ))}

            <Styled.MessageTitle fontSize="1.4rem">
              {feedbackText}
            </Styled.MessageTitle>
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
          <motion.div
            initial="close"
            animate={animation}
            variants={Styled.IconVariants}
          >
            <Styled.CloseIcon />
          </motion.div>
        </Styled.FeedbackTitle>
        <Styled.FeedbackBody
          initial="close"
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
