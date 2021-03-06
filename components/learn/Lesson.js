import * as Styled from './styles';

import Sandbox from './Sandbox';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

import { GriddyContext } from 'components/layout/Layout';
import { LESSON } from 'content/lessonContent';

import { useContext, Fragment, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Lesson({ lessonIndex, lessonData, setLessonData }) {
  const { windowWidth } = useContext(GriddyContext);

  const { solutions } = LESSON;
  const correctSolution = Object.values(solutions[lessonIndex - 1]);

  const router = useRouter();
  const controls = useAnimation();

  const [isLessonSolved, setIsLessonSolved] = useState(false);

  useEffect(() => {
    const userSolution = Object.values(lessonData);
    setIsLessonSolved(true);

    for (let i = 0; i < correctSolution.length; i++) {
      if (correctSolution[i] !== userSolution[i]) setIsLessonSolved(false);
    }
  }, [lessonData]);

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

  const renderInfo = () => {
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
            When developing a website, having designated areas like ???header???,
            ???sidebar???, ???main content???, and ???footer??? is very important. To create
            these areas, the
            <Styled.CodeSnippet>grid-template-areas</Styled.CodeSnippet>
            property is useful. Given a 3x3 grid, a right triangular shape can
            be created by
            <br />
            <Styled.CodeSnippetGroup margin="1.5rem auto">
              grid-template-areas: <br />
              <span>"top . ."</span>
              <span>"middle" "middle ."</span>
              <span>"bottom" "bottom" "bottom";</span>
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
        return (
          <>
            To space out grid items the{' '}
            <Styled.CodeSnippet>grid-gap</Styled.CodeSnippet> property is
            needed. For example,{' '}
            <Styled.CodeSnippet>grid-gap: 8px 10px</Styled.CodeSnippet> gives a
            gap of 8px between rows and 10px between columns. Try this out in
            the sandbox.
            <br />
            <br />
            One problem that should stand out is that the components overflow
            out of the sandbox. This is undesirable. The way to fix this is to
            use fractional units(fr) instead of percentages when defining{' '}
            <Styled.CodeSnippet>
              grid-template-columns
            </Styled.CodeSnippet> and{' '}
            <Styled.CodeSnippet>grid-template-rows</Styled.CodeSnippet>. The fr
            unit only deals with the remaining space available(takes into
            account grip gap) while percentages deal with the whole length.{' '}
            <br />
            <br />
            Suppose you have a grid that is 2x2 and you want each row to take
            1/2 of the height, the first column to take 1/4th of the remaining
            width, and the second column to take 3/4ths of the remaining width.
            Using fr units, this grid can be constructed by{' '}
            <Styled.CodeSnippet>
              grid-template-rows: 1fr 1fr
            </Styled.CodeSnippet>{' '}
            and
            <Styled.CodeSnippet>
              grid-template-columns: 1fr 3fr
            </Styled.CodeSnippet>
            .
          </>
        );
    }
  };

  const renderTask = () => {
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
        return (
          <>
            Set the <Styled.CodeSnippet>grid gap</Styled.CodeSnippet> to the
            value specified in the info. Then fix the overflow in the sandbox by
            converting the{' '}
            <Styled.CodeSnippet>grid-template-columns</Styled.CodeSnippet> and{' '}
            <Styled.CodeSnippet>grid-template-rows</Styled.CodeSnippet>{' '}
            properties from percentages into fr.
          </>
        );
    }
  };

  const renderCSS = () => {
    const onInputChange = (e, property) => {
      const lessonDataCopy = { ...lessonData };
      lessonDataCopy[property] = e.target.value;
      setLessonData(lessonDataCopy);
    };

    let cssProperties;

    // this will get something like: ['display: '',templateCols: '',templateRows: '']
    const lessonDataKeys = Object.keys(lessonData).slice(0, 3);

    const renderCSSInputs = (cssProperties) =>
      lessonDataKeys.map((key, i) => (
        <Styled.Code textIndent="1.6rem" key={key}>
          {cssProperties[i]}
          <Styled.CodeInput
            onChange={(e) => onInputChange(e, key)}
            value={lessonData[key]}
          />
          ;
        </Styled.Code>
      ));

    switch (lessonIndex) {
      case 1:
        cssProperties = [
          'display:',
          'grid-template-columns:',
          'grid-template-rows:',
        ];
        return (
          <>
            <Styled.Code>.container &#123;</Styled.Code>
            {renderCSSInputs(cssProperties)}
            <Styled.Code>&#125;</Styled.Code>
          </>
        );
      case 2:
        cssProperties = ['justify-self:', 'align-self:'];
        return (
          <>
            <Styled.Code>.leaf &#123;</Styled.Code>
            <Styled.Code>height: 40px;</Styled.Code>
            <Styled.Code>width: 40px;</Styled.Code>
            <Styled.Code>margin: 10px;</Styled.Code>
            <Styled.Code>place-self: center;</Styled.Code>
            {renderCSSInputs(cssProperties)}
            <Styled.Code>&#125;</Styled.Code>
          </>
        );
      case 3:
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

        const renderTemplateInputs = lessonDataKeys.map((key) => (
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
        cssProperties = [
          'grid-gap:',
          'grid-template-columns:',
          'grid-template-rows:',
        ];
        return (
          <>
            <Styled.Code>.container &#123;</Styled.Code>
            <Styled.Code textIndent="1.6rem">display: grid;</Styled.Code>
            {renderCSSInputs(cssProperties)}
            <Styled.Code textIndent="1.6rem">background: #fbd590;</Styled.Code>
            <Styled.Code>&#125;</Styled.Code>
          </>
        );
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
      case 4:
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
    }
  };

  const onSolutionBtnClick = () => setLessonData(solutions[lessonIndex - 1]);

  const onSubmitBtnClick = () => {
    if (!isLessonSolved) {
      controls.start('shake');
      return;
    } else {
      router.push(`/learn/${lessonIndex < 4 ? lessonIndex + 1 : 'finish'}`);
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
            {renderInfo()}
          </Styled.Description>

          <Styled.SubHeader margin="4rem 0 1.2rem" responsive>
            Task:
          </Styled.SubHeader>
          <Styled.Description fontSize="1.76rem" margin="0" responsive>
            {renderTask()}
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
          <Styled.CodeContainer
            variants={Styled.CodeContainerVariants}
            initial="initial"
            animate={controls}
          >
            {renderCSS()}
          </Styled.CodeContainer>
          <Styled.FlexContainer
            padding="2rem 0 0 0"
            justifyContent="space-between"
          >
            <ButtonPrimary onClick={onSolutionBtnClick} margin="0" solution>
              Show Solution
            </ButtonPrimary>
            <ButtonPrimary
              margin="0"
              onClick={onSubmitBtnClick}
              className={`${!isLessonSolved && 'disabled'}`}
            >
              Finish this lesson
            </ButtonPrimary>
          </Styled.FlexContainer>
        </Styled.GridItem>

        <Styled.GridItem gridArea={'html'}>
          <Styled.SubHeader textAlign="center">HTML</Styled.SubHeader>
          <Styled.CodeContainer>{renderHTML()}</Styled.CodeContainer>
        </Styled.GridItem>
      </Styled.GridContainer>
    </>
  );
}
