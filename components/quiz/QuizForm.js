import * as Styled from './styles';

import Answer from './Answer';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';
import PopUpMessage from './PopupMessage';

import { QUIZ } from 'content/quizContent';

import { useState } from 'react';
import { useAnimation } from 'framer-motion';

export default function QuizForm({
  quizIndex,
  sample,
  selectedAnswer,
  setSelectedAnswer,
}) {
  const codeSnippets = QUIZ.codeSnippets[quizIndex];
  const hasCode = codeSnippets.some(({ noCodeSnippets }) => !noCodeSnippets);

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

  const renderInputArea = () => {
    const onInputChange = (e, position) => {
      const answerObjectCopy = { ...selectedAnswer };
      answerObjectCopy[position] = e.target.value;
      setSelectedAnswer(answerObjectCopy);
    };

    const renderInputs = () => {
      const inputs = [];
      for (let i = 0; i < 3; i++) {
        inputs.push(
          <Styled.Code textIndent="1.6rem" key={`input-${i + 1}`}>
            "
            <Styled.CodeInput
              width="24rem"
              onChange={(e) => onInputChange(e, `line${i + 1}`)}
              value={selectedAnswer[`line${i + 1}`] ?? ''}
            />
            "
          </Styled.Code>
        );
      }
      return inputs;
    };

    return (
      <Styled.CodeContainer margin="1.6rem 0">
        <Styled.Code>grid-template-areas:</Styled.Code>
        {renderInputs().map((input) => input)};
      </Styled.CodeContainer>
    );
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

      {quizIndex === 1 && renderInputArea()}

      {sample ? (
        <Styled.PopUp>
          <ButtonPrimary onClick={onSolutionCheck}>
            Check Solution
          </ButtonPrimary>
          <PopUpMessage
            solution={solution}
            controls={controls}
            answers={answers}
          />
        </Styled.PopUp>
      ) : (
        renderButton()
      )}
    </Styled.QuizForm>
  );
}
