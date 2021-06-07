import * as Styled from './styles';

import Answer from './Answer';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

import { QUIZ } from 'content/quizContent';

import { useState } from 'react';
import { useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function QuizForm({
  quizIndex,
  sample,
  selectedAnswer,
  setSelectedAnswer,
}) {
  const codeSnippets = QUIZ.codeSnippets[quizIndex];
  const hasCode = codeSnippets[0].indent !== null;

  const { question, answers } = QUIZ.questions[quizIndex];

  const [solution, setSolution] = useState(null);

  const controls = useAnimation();

  const renderCode = () => (
    <Styled.CodeContainer>
      {codeSnippets.map(({ indent, text }) => (
        <Styled.Code textIndent={indent} key={`${indent}-${text}`}>
          {text}
        </Styled.Code>
      ))}
    </Styled.CodeContainer>
  );

  const renderAnswer = () => (
    <Styled.AnswerContainer>
      {answers.map((answer, index) => (
        <Answer
          key={`answer-${index}`}
          answer={answer}
          index={index}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      ))}
    </Styled.AnswerContainer>
  );

  const renderButton = () => {
    switch (quizIndex) {
      case 0:
        return <ButtonPrimary href="/quiz/2">Next Question</ButtonPrimary>;
      case 4:
        return (
          <Styled.FlexContainer>
            <ButtonPrimary href="/quiz/4">Previous Question</ButtonPrimary>
            <ButtonPrimary href="/quiz/results">Submit</ButtonPrimary>
          </Styled.FlexContainer>
        );
      default:
        return (
          <Styled.FlexContainer>
            <ButtonPrimary href={`/quiz/${quizIndex}`}>
              Previous Question
            </ButtonPrimary>
            <ButtonPrimary href={`/quiz/${quizIndex + 2}`}>
              Next Question
            </ButtonPrimary>
          </Styled.FlexContainer>
        );
    }
  };

  const onSolutionCheck = () => {
    setSolution(selectedAnswer);
    controls.start('visible');
  };

  return (
    <Styled.QuizForm>
      <Styled.Header>
        {sample ? 'Sample Question' : `Question ${quizIndex + 1}`}
      </Styled.Header>
      {hasCode && renderCode()}
      <Styled.SubHeader maxWidth="72rem" margin="2.4rem 0 0.8rem">
        {question}
      </Styled.SubHeader>
      {answers && renderAnswer()}
      {sample ? (
        <Styled.PopUp>
          <ButtonPrimary onClick={onSolutionCheck}>
            Check Solution
          </ButtonPrimary>

          <Styled.Message
            variants={Styled.MessageVariants}
            initial="hidden"
            animate={controls}
            onClick={() => controls.start('hidden')}
          >
            {solution === null ? (
              <Styled.MessageTitle fontSize="1.8rem">
                Hey, at least give it a try before checking the solution.
                <Styled.CloseIcon />
              </Styled.MessageTitle>
            ) : (
              <>
                <Styled.MessageTitle fontSize="1.8rem">
                  Your answer is{' '}
                  {solution === 3 ? 'correct! Good Job!' : 'not right...'}
                  <Styled.CloseIcon />
                </Styled.MessageTitle>
                {solution !== 3 && (
                  <>
                    <Styled.MessageTitle>
                      You chose answer {solution + 1}:
                    </Styled.MessageTitle>

                    <Styled.MessageDescription>
                      "{answers[solution]}"
                    </Styled.MessageDescription>

                    <Styled.MessageTitle>
                      The correct answer is answer 4:
                    </Styled.MessageTitle>

                    <Styled.MessageDescription>
                      "{answers[3]}"
                    </Styled.MessageDescription>

                    <Styled.MessageTitle>
                      How about review our grid lessons?
                    </Styled.MessageTitle>

                    <Styled.MessageDescription margin="0 0 2rem 0">
                      <Link href="/learn">Go to lessons</Link>
                    </Styled.MessageDescription>
                  </>
                )}
              </>
            )}
          </Styled.Message>
        </Styled.PopUp>
      ) : (
        renderButton()
      )}
    </Styled.QuizForm>
  );
}
