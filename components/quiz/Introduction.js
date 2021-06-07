import * as Styled from './styles';
import { ContentVariants } from 'components/about/styles';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

export default function Introduction() {
  return (
    <Styled.QuizContainer
      variants={ContentVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.Header>The CSS Grid Quiz</Styled.Header>
      <Styled.Description fontSize="2rem" textAlign="center">
        Take a series of questions to test your practical knowledge of CSS grid.
      </Styled.Description>
      <Styled.Description fontSize="2rem" textAlign="center" maxWidth="48rem">
        Once you finish all the questions, you will be able to submit your
        answers and see your results.
      </Styled.Description>
      <Styled.Description fontSize="2rem" textAlign="center" maxWidth="48rem">
        You can modify your answer at any time by choosing the question located
        at the sidebar.
      </Styled.Description>

      <ButtonPrimary href="/quiz/1">Start Quiz</ButtonPrimary>
    </Styled.QuizContainer>
  );
}
