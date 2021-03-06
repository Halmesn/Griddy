import * as Styled from './styles';

import { GriddyContext } from 'components/layout/Layout';

import { useContext, useState } from 'react';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';
import QuizForm from 'components/quiz/QuizForm';

export default function HomeContent() {
  const { windowWidth, theme } = useContext(GriddyContext);
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <Styled.HomeContent>
      <Styled.TextContainer>
        <Styled.Header>Welcome to Griddy,</Styled.Header>
        <Styled.Description
          fontSize="1.85rem"
          margin={(windowWidth <= 980 && '1.6rem auto') || '2rem 0.8rem'}
        >
          where anyone can learn CSS Grid in an easy and interactive way!
        </Styled.Description>
        <ButtonPrimary href="/learn/1">Start learning</ButtonPrimary>
      </Styled.TextContainer>
      <Styled.FlexContainer>
        <Styled.Video
          src={`/video/grid-${theme}.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
      </Styled.FlexContainer>
      <Styled.TextContainer>
        <Styled.Header>Test Your Knowledge</Styled.Header>
        <Styled.Description
          maxWidth="36rem"
          fontSize="2rem"
          margin={'2rem 0.8rem'}
        >
          Take our CSS Grid quiz to test your knowledge on grid properties, grid
          areas, and more.
        </Styled.Description>
        <ButtonPrimary href="/quiz">I'm ready to go!</ButtonPrimary>
      </Styled.TextContainer>
      <Styled.FlexContainer>
        <QuizForm
          quizIndex={0}
          sample
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      </Styled.FlexContainer>
    </Styled.HomeContent>
  );
}
