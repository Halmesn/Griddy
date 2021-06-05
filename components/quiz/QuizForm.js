import * as Styled from './styles';

import Answer from './Answer';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

import { QUIZ } from 'content/quizContent';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function QuizForm({ quizIndex, sample }) {
  const codeSnippets = QUIZ.codeSnippets[quizIndex];
  const hasCode = codeSnippets.some(({ indent }) => indent !== null);

  const { question, answers } = QUIZ.questions[quizIndex];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [solution, setSolution] = useState(null);

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
        <Styled.MessagePopUp>
          <ButtonPrimary onClick={() => setSolution(selectedAnswer)}>
            Check Solution
          </ButtonPrimary>
          <AnimatePresence>
            {solution === 3 && (
              <Styled.MessageContainer
                variants={Styled.MessageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Spot on!
              </Styled.MessageContainer>
            )}
          </AnimatePresence>
        </Styled.MessagePopUp>
      ) : (
        <ButtonPrimary>Submit</ButtonPrimary>
      )}
    </Styled.QuizForm>
  );
}
