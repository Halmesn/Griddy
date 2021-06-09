import * as Styled from './styles';

export default function Choice({
  choice,
  selectedChoice,
  index,
  setSelectedChoice,
}) {
  return (
    <Styled.FlexContainer onClick={() => setSelectedChoice(index)}>
      <Styled.RadioButton>
        {selectedChoice === index && (
          <Styled.RadioDot
            variants={Styled.DotVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </Styled.RadioButton>
      <Styled.Choice fontSize="1.85em" margin="1.2rem 1.6rem">
        {choice}
      </Styled.Choice>
    </Styled.FlexContainer>
  );
}
