import * as Styled from './styles';

import Sandbox from './Sandbox';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';

export default function Lesson({ lessonIndex, lessonData, setLessonData }) {
  const { windowWidth } = useContext(GriddyContext);

  const renderHeader = () => {
    const renderHeaderText = () => {
      switch (lessonIndex) {
        case 1:
          return `Grid Creation`;
        case 2:
          return `Item Placement`;
        case 3:
          return `Grid Areas`;
        case 4:
          return `Grid Gap and the Fractional Unit`;
      }
    };

    return (
      <Styled.Header textAlign="center">{renderHeaderText()}</Styled.Header>
    );
  };

  const renderInfoDesc = () => {
    switch (lessonIndex) {
      case 1:
        return (
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            When creating a grid you must first set{' '}
            <Styled.CodeSnippet>display: grid</Styled.CodeSnippet>. To create 3
            columns of width 150 pixels each, you would set
            <Styled.CodeSnippet>
              grid-template-columns: 150px 150px 150px
            </Styled.CodeSnippet>
            .
          </Styled.Description>
        );
      case 2:
        return ``;
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const renderTaskDesc = () => {
    switch (lessonIndex) {
      case 1:
        return (
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            Create a 2x3 grid where each row has a height of 133 pixels and each
            column has a width of 50%.
          </Styled.Description>
        );
      case 2:
        return ``;
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const renderCSSCode = () => {
    const onInputChange = (e, property) => {
      const lessonDataCopy = { ...lessonData };
      lessonDataCopy[property] = e.target.value;
      setLessonData(lessonDataCopy);
    };

    switch (lessonIndex) {
      case 1:
        return (
          <>
            <Styled.Code>.container &#123;</Styled.Code>
            <Styled.Code textIndent="1.6rem">
              display:{' '}
              <Styled.CodeInput
                onChange={(e) => onInputChange(e, 'display')}
                value={lessonData['display']}
              />
              ;
            </Styled.Code>
            <Styled.Code textIndent="1.6rem">
              grid-template-columns:{' '}
              <Styled.CodeInput
                onChange={(e) => onInputChange(e, 'templateCols')}
                value={lessonData['templateCols']}
              />
              ;
            </Styled.Code>
            <Styled.Code textIndent="1.6rem">
              grid-template-rows:{' '}
              <Styled.CodeInput
                onChange={(e) => onInputChange(e, 'templateRows')}
                value={lessonData['templateRows']}
              />
              ;
            </Styled.Code>
          </>
        );
      case 2:
        return ``;
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const renderHTML = () => {
    switch (lessonIndex) {
      case 1:
        const innerHTML = [...Array(6)].map((val, i) => (
          <Styled.Code textIndent="1.6rem" key={`box-${i}`}>
            &#60;div class="box"&#62;&#60;/div&#62;
          </Styled.Code>
        ));

        return (
          <>
            <Styled.Code>&#60;div class="container"&#62;</Styled.Code>
            {innerHTML}
            <Styled.Code>&#60;/div&#62;</Styled.Code>
          </>
        );
      case 2:
        return ``;
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  return (
    <>
      {renderHeader()}
      <Styled.GridContainer>
        <Styled.GridItem gridArea={'sandbox'}>
          <Styled.SubHeader textAlign="center">Sand box</Styled.SubHeader>
          <Sandbox lessonData={lessonData} />
        </Styled.GridItem>

        <Styled.GridItem gridArea={'info'}>
          <Styled.SubHeader
            margin={windowWidth < 768 ? '0.4rem 0' : '4rem 0 1.2rem'}
            responsive
          >
            Info:
          </Styled.SubHeader>
          {renderInfoDesc()}
          <Styled.SubHeader margin={'4rem 0 1.2rem'} responsive>
            Task:
          </Styled.SubHeader>
          {renderTaskDesc()}
        </Styled.GridItem>

        <Styled.GridItem gridArea={'css'}>
          <Styled.SubHeader textAlign="center">CSS</Styled.SubHeader>
          <Styled.CodeContainer>{renderCSSCode()}</Styled.CodeContainer>
        </Styled.GridItem>

        <Styled.GridItem gridArea={'html'}>
          <Styled.SubHeader textAlign="center">HTML</Styled.SubHeader>
          <Styled.CodeContainer>{renderHTML()}</Styled.CodeContainer>
        </Styled.GridItem>
      </Styled.GridContainer>
    </>
  );
}
