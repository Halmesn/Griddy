import * as Styled from './styles';

export default function Sandbox({ lessonData }) {
  const leavesArray = [0, 0, 0, 0, 0, 0];
  const leaves = leavesArray.map(() => (
    <Styled.FourLeafClover layout>🍀</Styled.FourLeafClover>
  ));

  return (
    <Styled.Sandbox>
      <Styled.SandboxGrid {...lessonData} layout>
        {leaves}
      </Styled.SandboxGrid>
    </Styled.Sandbox>
  );
}
