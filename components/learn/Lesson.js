import * as Styled from './styles';

import Sandbox from './Sandbox';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

import { GriddyContext } from 'components/layout/Layout';

import { useContext, Fragment } from 'react';
import Image from 'next/image';

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
        return (
          <>
            When developing a website, having designated areas like “header”,
            “sidebar”, “main content”, and “footer” is very important. To create
            these areas, the
            <Styled.CodeSnippet>grid-template-areas</Styled.CodeSnippet>
            property is useful. Given a 3x3 grid, a right triangular shape can
            be created by
            <br />
            <Styled.CodeSnippetGroup margin="1.5rem auto">
              grid-template-areas: <br />
              <div style={{ textIndent: '1.6rem' }}>"top . ."</div>
              <div style={{ textIndent: '1.6rem' }}>"middle" "middle ."</div>
              <div style={{ textIndent: '1.6rem' }}>
                "bottom" "bottom" "bottom";
              </div>
            </Styled.CodeSnippetGroup>
            where a "." represents an empty grid area. Then there will have to
            be 3 HTML tags with classes that have one of the{' '}
            <Styled.CodeSnippet margin="0.32rem 0.56rem 0.32rem 0">
              grid-area: top
            </Styled.CodeSnippet>
            ,<Styled.CodeSnippet>grid-area: middle</Styled.CodeSnippet>, and
            <Styled.CodeSnippet>grid-area: bottom</Styled.CodeSnippet>{' '}
            properties respectively.
          </>
        );
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
        return `Recreate the grid below using grid areas. The sidebar should be 1/3
        of the width with the main content taking up the rest of the space.`;
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
        const lessonTemplates = Object.keys(lessonData).slice(1, 4);
        const lessonAreas = [
          { name: 'header', background: '#ff5454', property: 'headerArea' },
          { name: 'sidebar', background: '#61cc9e', property: 'sidebarArea' },
          {
            name: 'main-content',
            background: '#ffffff',
            property: 'mainContentArea',
          },
          { name: 'footer', background: '#54a3ff', property: 'footerArea' },
        ];
        const renderTemplateInputs = lessonTemplates.map((key) => (
          <Styled.Code textIndent="3.2rem" key={key}>
            "
            <Styled.CodeInput
              onChange={(e) => onInputChange(e, key)}
              value={lessonData[key]}
            />
            "
          </Styled.Code>
        ));

        const renderAreaInputs = lessonAreas.map(
          ({ name, background, property }) => (
            <Fragment key={name}>
              <Styled.Code>{'.' + name} &#123;</Styled.Code>
              <Styled.Code textIndent="1.6rem">
                background: {background};
              </Styled.Code>
              <Styled.Code textIndent="1.6rem">
                grid-area:{' '}
                <Styled.CodeInput
                  onChange={(e) => onInputChange(e, property)}
                  value={lessonData[property]}
                />
                ;
              </Styled.Code>
              <Styled.Code>&#125;</Styled.Code>
            </Fragment>
          )
        );

        return (
          <>
            <Styled.Code>.container &#123;</Styled.Code>
            <Styled.Code textIndent="1.6rem">display: grid;</Styled.Code>
            <Styled.Code textIndent="1.6rem">
              grid-template-columns: 33.333% 66.666%;
            </Styled.Code>
            <Styled.Code textIndent="1.6rem">
              grid-template-rows: 10% 80% 10%;
            </Styled.Code>
            <Styled.Code textIndent="1.6rem">grid-template-areas:</Styled.Code>
            {renderTemplateInputs}
            <Styled.Code>&#125;</Styled.Code>
            {renderAreaInputs}
          </>
        );
      case 4:
        return ``;
    }
  };

  const renderHTML = () => {
    let innerHTML;
    switch (lessonIndex) {
      case 1:
      case 2:
        innerHTML = [...Array(6)].map((val, i) => (
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
        const formatInnerHTML = (string) =>
          string[0].toUpperCase() + string.slice(1).replace('-', ' ');

        innerHTML = ['header', 'sidebar', 'main-content', 'footer'].map(
          (el) => (
            <Styled.Code textIndent="1.6rem" key={el}>
              &#60;div class="{el}"&#62; {formatInnerHTML(el)} &#60;/div&#62;
            </Styled.Code>
          )
        );
        return (
          <>
            <Styled.Code>&#60;div class="container"&#62;</Styled.Code>
            {innerHTML}
          </>
        );
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
        setLessonData({
          solution: null,
          templateArea1: 'h h',
          templateArea2: 's m',
          templateArea3: 'f f',
          headerArea: 'h',
          sidebarArea: 's',
          mainContentArea: 'm',
          footerArea: 'f',
        });
        return;
      case 4:
        return ``;
    }
  };

  return (
    <>
      {renderHeader()}
      <Styled.GridContainer lessonIndex={lessonIndex}>
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

          <Styled.SubHeader margin="4rem 0 1.2rem" responsive>
            Task:
          </Styled.SubHeader>
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            {renderTaskDesc()}
          </Styled.Description>
          {lessonIndex === 3 && (
            <Styled.GridImage>
              <Image
                src="/images/lesson3-grid.png"
                alt="image of lesson3 task goal"
                width={916}
                height={496}
                layout="responsive"
              />
            </Styled.GridImage>
          )}
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
