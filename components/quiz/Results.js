import * as Styled from './styles';

import { QUIZ } from 'content/quizContent';
import Feedback from './Feedback';

export default function Results({ choices }) {
  const { correctAnswers, questions } = QUIZ;

  const isGridAreaCorrect = () => {
    const correctAnswer = Object.keys(correctAnswers[1]);
    const userChoice = Object.keys(
      choices[1] ?? {
        line1: '',
        line2: '',
        line3: '',
      }
    );

    for (let key of correctAnswer)
      if (correctAnswer[key] !== userChoice[key]) return false;

    return true;
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < choices.length; i++) {
      if (i === 1 && isGridAreaCorrect()) score += 1;
      else if (choices[i] === correctAnswers[i]) score += 1;
    }
    return score;
  };

  const feedbacks = [
    {
      userChoice: choices[0],
      choices: questions[1].choices,
      correctAnswer: 1,
      isShowing: !(choices[0] === 1),
      feedbackText: 'You may want to review CSS grid creation.',
      feedbackLink: '/learn',
    },
    {
      userChoice: choices[1],
      choices: null,
      correctAnswer: correctAnswers[1],
      isShowing: isGridAreaCorrect(),
      feedbackText: 'You may want to review grid areas.',
      feedbackLink: '/learn/3',
    },
    {
      userChoice: choices[2],
      choices: questions[3].choices,
      correctAnswer: 2,
      isShowing: !(choices[2] === 2),
      feedbackText: 'You may want to review item placement.',
      feedbackLink: '/learn/2',
    },
    {
      userChoice: choices[3],
      choices: questions[4].choices,
      correctAnswer: 1,
      isShowing: !(choices[3] === 1),
      feedbackText: 'You may want to review fractional units.',
      feedbackLink: '/learn/4',
    },
    {
      userChoice: choices[4],
      choices: questions[5].choices,
      correctAnswer: 3,
      isShowing: !(choices[4] === 3),
      feedbackText: 'You may want to review grid gap.',
      feedbackLink: '/learn/4',
    },
  ];

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
      <Styled.FeedbackList>
        {feedbacks.map((feedback, index) => (
          <Feedback
            feedback={feedback}
            index={index}
            key={feedback.feedbackText}
          />
        ))}
      </Styled.FeedbackList>
    </Styled.Results>
  );
}
