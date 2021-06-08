import * as Styled from './styles';

import { QUIZ } from 'content/quizContent';

export default function Results({ answers }) {
  const { correctAnswers } = QUIZ;

  const checkUserAnswer = () => {};

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < answers.length; i++)
      if (answers[i] === correctAnswers[i]) score += 1;
    return score;
  };

  return (
    <Styled.Results>
      <Styled.Header>Results</Styled.Header>
      <Styled.SubHeader margin="1.6rem">
        Your Score is: {calculateScore()}/5
      </Styled.SubHeader>
      {calculateScore() !== 5 ? (
        <Styled.SubHeader margin="1.05rem">Feedback</Styled.SubHeader>
      ) : (
        <Styled.SubHeader>
          Congratulations on getting everything correct!
        </Styled.SubHeader>
      )}
    </Styled.Results>
  );
}
