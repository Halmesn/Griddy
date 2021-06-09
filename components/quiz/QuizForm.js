import * as Styled from './styles';

import Choice from './Choice';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';
import PopUpMessage from './PopupMessage';

import { QUIZ } from 'content/quizContent';

import { useState } from 'react';
import { useAnimation } from 'framer-motion';

export default function QuizForm({
  quizIndex,
  sample,
  selectedChoice,
  setSelectedChoice,
}) {
  const codeSnippets = QUIZ.codeSnippets[quizIndex];
  const hasCode = codeSnippets.some(({ noCodeSnippets }) => !noCodeSnippets);

  const { question, choices } = QUIZ.questions[quizIndex];

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

  const renderChoice = () => (
    <Styled.ChoiceContainer>
      {choices.map((choice, index) => (
        <Choice
          key={`choice-${index}`}
          choice={choice}
          index={index}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      ))}
    </Styled.ChoiceContainer>
  );

  const renderButton = () => {
    switch (quizIndex) {
      case 1:
        return <ButtonPrimary href="/quiz/2">Next Question</ButtonPrimary>;
      case 5:
        return (
          <Styled.FlexContainer>
            <ButtonPrimary href="/quiz/4">Previous Question</ButtonPrimary>
            <ButtonPrimary href="/quiz/results">Submit</ButtonPrimary>
          </Styled.FlexContainer>
        );
      default:
        return (
          <Styled.FlexContainer>
            <ButtonPrimary href={`/quiz/${quizIndex - 1}`}>
              Previous Question
            </ButtonPrimary>
            <ButtonPrimary href={`/quiz/${quizIndex + 1}`}>
              Next Question
            </ButtonPrimary>
          </Styled.FlexContainer>
        );
    }
  };

  const renderInputArea = () => {
    const onInputChange = (e, position) => {
      const choiceObjectCopy = { ...selectedChoice };
      choiceObjectCopy[position] = e.target.value;
      setSelectedChoice(choiceObjectCopy);
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
              value={selectedChoice[`line${i + 1}`] ?? ''}
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
    setSolution(selectedChoice);
    controls.start('visible');
  };

  return (
    <Styled.QuizForm>
      <Styled.Header>
        {sample ? 'Sample Question' : `Question ${quizIndex}`}
      </Styled.Header>

      {hasCode && renderCode()}

      <Styled.SubHeader maxWidth="72rem" margin="2.4rem 0 0.8rem">
        {question}
      </Styled.SubHeader>

      {choices && renderChoice()}

      {quizIndex === 2 && renderInputArea()}

      {sample ? (
        <Styled.PopUp>
          <ButtonPrimary onClick={onSolutionCheck}>
            Check Solution
          </ButtonPrimary>
          <PopUpMessage
            solution={solution}
            controls={controls}
            choices={choices}
          />
        </Styled.PopUp>
      ) : (
        renderButton()
      )}
    </Styled.QuizForm>
  );
}
