import * as Styled from './styles';

export default function Answer({
  answer,
  selectedAnswer,
  index,
  setSelectedAnswer,
}) {
  return (
    <Styled.FlexContainer onClick={() => setSelectedAnswer(index)}>
      <Styled.RadioButton>
        {selectedAnswer === index && (
          <Styled.RadioDot
            variants={Styled.DotVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </Styled.RadioButton>
      <Styled.Answer fontSize="1.85em" margin="1.2rem 1.6rem">
        {answer}
      </Styled.Answer>
    </Styled.FlexContainer>
  );
}
