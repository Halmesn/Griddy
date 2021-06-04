import * as Styled from './styles';

import Answer from './Answer';

import { QUIZ } from 'content/quizContent';

import { useState } from 'react';

export default function QuizForm({ index, sample }) {
  const codeSnippets = QUIZ.codeSnippets[index];
  const hasCode = codeSnippets.some(({ indent }) => indent !== null);

  const { question, answers } = QUIZ.questions[index];

  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
        {index === 0 && sample ? 'Sample Question' : `Question ${index + 1}`}
      </Styled.Header>
      {hasCode && renderCode()}
      <Styled.SubHeader maxWidth="72rem" margin="2.4rem 0 0.8rem">
        {question}
      </Styled.SubHeader>
      {answers && renderAnswer()}
    </Styled.QuizForm>
  );
}
