import * as Styled from './styles';

export default function Sandbox({ lessonIndex, lessonData }) {
  const renderGridItems = () => {
    switch (lessonIndex) {
      case 1:
      case 2:
        const leaves = [...Array(6)].map((val, i) => (
          <Styled.FourLeafClover layout key={i} {...lessonData}>
            🍀
          </Styled.FourLeafClover>
        ));
        return leaves;

      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  return (
    <Styled.Sandbox>
      <Styled.SandboxGrid {...lessonData} layout lessonIndex={lessonIndex}>
        {renderGridItems()}
      </Styled.SandboxGrid>
    </Styled.Sandbox>
  );
}
