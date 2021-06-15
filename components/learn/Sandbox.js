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
        const { headerArea, sidebarArea, mainContentArea, footerArea } =
          lessonData;
        return (
          <>
            <Styled.SandboxHeader layout headerArea={headerArea}>
              Header
            </Styled.SandboxHeader>
            <Styled.SandboxSidebar layout sidebarArea={sidebarArea}>
              Sidebar
            </Styled.SandboxSidebar>
            <Styled.SandboxMainContent layout mainContentArea={mainContentArea}>
              Main Content
            </Styled.SandboxMainContent>
            <Styled.SandboxFooter layout footerArea={footerArea}>
              Footer
            </Styled.SandboxFooter>
          </>
        );
      case 4:
        return ``;
    }
  };

  return (
    <Styled.Sandbox height={lessonIndex === 3 && '50rem'}>
      <Styled.SandboxGrid {...lessonData} layout lessonIndex={lessonIndex}>
        {renderGridItems()}
      </Styled.SandboxGrid>
    </Styled.Sandbox>
  );
}
