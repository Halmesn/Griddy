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
      case 4:
        const { headerArea, sidebarArea, mainContentArea, footerArea } =
          lessonData;
        return (
          <>
            <Styled.SandboxHeader
              layout
              headerArea={lessonIndex === 3 ? headerArea : 'header'}
            >
              Header
            </Styled.SandboxHeader>
            <Styled.SandboxSidebar
              layout
              sidebarArea={lessonIndex === 3 ? sidebarArea : 'sidebar'}
            >
              Sidebar
            </Styled.SandboxSidebar>
            <Styled.SandboxMainContent
              layout
              mainContentArea={
                lessonIndex === 3 ? mainContentArea : 'main-content'
              }
            >
              Main Content
            </Styled.SandboxMainContent>
            <Styled.SandboxFooter
              layout
              footerArea={lessonIndex === 3 ? footerArea : 'footer'}
            >
              Footer
            </Styled.SandboxFooter>
          </>
        );
    }
  };

  return (
    <Styled.Sandbox height={lessonIndex === 3 ? '50rem' : ''}>
      <Styled.SandboxGrid {...lessonData} layout lessonIndex={lessonIndex}>
        {renderGridItems()}
      </Styled.SandboxGrid>
    </Styled.Sandbox>
  );
}
