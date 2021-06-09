import * as Styled from './styles';

import { QUIZ } from 'content/quizContent';

export default function Results({ answers }) {
  const { correctAnswers } = QUIZ;

  const isGridAreaCorrect = () => {
    const gridAreaCorrect = correctAnswers[1];
    const { line1, line2, line3 } = answers[1] ?? {
      line1: '',
      line2: '',
      line3: '',
    };

    if (
      line1.trim().toLowerCase() === gridAreaCorrect.line1 &&
      line2.trim().toLowerCase() === gridAreaCorrect.line2 &&
      line3.trim().toLowerCase() === gridAreaCorrect.line3
    )
      return true;
    return false;
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (i === 1 && isGridAreaCorrect()) score += 1;
      else if (answers[i] === correctAnswers[i]) score += 1;
    }
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
