import * as Styled from './styles';

import Sandbox from './Sandbox';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

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
          <>
            When creating a grid you must first set{' '}
            <Styled.CodeSnippet>display: grid</Styled.CodeSnippet>. To create 3
            columns of width 150 pixels each, you would set
            <Styled.CodeSnippet>
              grid-template-columns: 150px 150px 150px
            </Styled.CodeSnippet>
            .
          </>
        );
      case 2:
        return (
          <>
            A grid item can be aligned horizontally by using the
            <Styled.CodeSnippet>justify-self</Styled.CodeSnippet> property. It
            can be aligned vertically by using the align-self property. For
            instance, to align a grid item to the center left of its grid
            container you would set{' '}
            <Styled.CodeSnippet>justify-self: start</Styled.CodeSnippet> and
            <Styled.CodeSnippet>align-self: center</Styled.CodeSnippet>.
          </>
        );
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const renderTaskDesc = () => {
    switch (lessonIndex) {
      case 1:
        return `Create a 2x3 grid where each row has a height of 133 pixels and each
            column has a width of 50%.`;
      case 2:
        return `Align each box to the bottom left of its grid container.`;
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
            <Styled.Code>&#125;</Styled.Code>
          </>
        );
      case 2:
        return (
          <>
            <Styled.Code>.leaf &#123;</Styled.Code>
            <Styled.Code>height: 40px;</Styled.Code>
            <Styled.Code>width: 40px;</Styled.Code>
            <Styled.Code>margin: 10px;</Styled.Code>
            <Styled.Code>place-self: center;</Styled.Code>
            <Styled.Code>
              justify-self:{' '}
              <Styled.CodeInput
                onChange={(e) => onInputChange(e, 'justifySelf')}
                value={lessonData['justifySelf']}
              />
              ;
            </Styled.Code>
            <Styled.Code>
              align-self:{' '}
              <Styled.CodeInput
                onChange={(e) => onInputChange(e, 'alignSelf')}
                value={lessonData['alignSelf']}
              />
              ;
            </Styled.Code>
            <Styled.Code>&#125;</Styled.Code>
          </>
        );
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const renderHTML = () => {
    switch (lessonIndex) {
      case 1:
      case 2:
        const innerHTML = [...Array(6)].map((val, i) => (
          <Styled.Code textIndent="1.6rem" key={`leaf-${i}`}>
            &#60;div class="leaf"&#62;&#60;/div&#62;
          </Styled.Code>
        ));

        return (
          <>
            <Styled.Code>&#60;div class="container"&#62;</Styled.Code>
            {innerHTML}
            <Styled.Code>&#60;/div&#62;</Styled.Code>
          </>
        );
      case 3:
        return ``;
      case 4:
        return ``;
    }
  };

  const onSolutionBtnClick = () => {
    switch (lessonIndex) {
      case 1:
        setLessonData({
          solution: null,
          display: 'grid',
          templateCols: '50% 50%',
          templateRows: '133px 133px 133px',
        });
        return;
      case 2:
        setLessonData({
          solution: null,
          justifySelf: 'start',
          alignSelf: 'end',
        });
        return;
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
          <Sandbox lessonIndex={lessonIndex} lessonData={lessonData} />
        </Styled.GridItem>

        <Styled.GridItem gridArea={'info'}>
          <Styled.SubHeader
            margin={windowWidth < 768 ? '0.4rem 0' : '4rem 0 1.2rem'}
            responsive
          >
            Info:
          </Styled.SubHeader>
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            {renderInfoDesc()}
          </Styled.Description>

          <Styled.SubHeader margin={'4rem 0 1.2rem'} responsive>
            Task:
          </Styled.SubHeader>
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            {renderTaskDesc()}
          </Styled.Description>
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
      <Styled.FlexContainer
        padding={
          windowWidth <= 768 ? '0 2.4rem 0 2.4rem' : '0 0.72rem 0 0.72rem'
        }
        width="50%"
        justifyContent="space-between"
      >
        <ButtonPrimary onClick={onSolutionBtnClick}>
          Show Solution
        </ButtonPrimary>
        <ButtonPrimary>Submit</ButtonPrimary>
      </Styled.FlexContainer>
    </>
  );
}
