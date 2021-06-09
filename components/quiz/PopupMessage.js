import * as Styled from './styles';

import Link from 'next/link';

export default function PopUpMessage({ controls, solution, choices }) {
  const renderMessage = () => {
    switch (solution) {
      case null:
        return (
          <Styled.MessageTitle fontSize="1.8rem">
            Hey, at least give it a try before checking the solution.
            <Styled.CloseIcon />
          </Styled.MessageTitle>
        );
      case 3:
        return (
          <>
            <Styled.MessageTitle fontSize="1.8rem">
              Your answer is correct! Good Job!
              <Styled.CloseIcon />
            </Styled.MessageTitle>
            <Styled.MessageDescription margin="0 0 2rem 0">
              <Link href="/quiz">Try more quiz</Link>
            </Styled.MessageDescription>
          </>
        );
      default:
        return (
          <>
            <Styled.MessageTitle fontSize="1.8rem">
              Your answer is not right...
              <Styled.CloseIcon />
            </Styled.MessageTitle>
            <Styled.MessageTitle>
              You chose answer {solution + 1}:
            </Styled.MessageTitle>

            <Styled.MessageDescription>
              "{choices[solution]}"
            </Styled.MessageDescription>

            <Styled.MessageTitle>The correct answer is:</Styled.MessageTitle>

            <Styled.MessageDescription>
              "{choices[3]}"
            </Styled.MessageDescription>

            <Styled.MessageTitle>
              How about review our grid lessons?
            </Styled.MessageTitle>

            <Styled.MessageDescription margin="0 0 2rem 0">
              <Link href="/learn">Go to lessons</Link>
            </Styled.MessageDescription>
          </>
        );
    }
  };

  return (
    <Styled.Message
      variants={Styled.MessageVariants}
      initial="hidden"
      animate={controls}
      onClick={() => controls.start('hidden')}
    >
      {renderMessage()}
    </Styled.Message>
  );
}
