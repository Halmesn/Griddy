import * as Styled from './styles';

import { GriddyContext } from 'components/layout/Layout';

import { useContext } from 'react';

export default function HomeContent() {
  const { windowWidth } = useContext(GriddyContext);

  return (
    <Styled.HomeContent>
      <Styled.GridItem>
        <Styled.Header>Welcome to Griddy,</Styled.Header>
        <Styled.Description
          fontSize="1.85rem"
          margin={windowWidth <= 980 && '1.6rem auto'}
        >
          where anyone can learn CSS Grid in an easy and interactive way.
        </Styled.Description>
      </Styled.GridItem>
    </Styled.HomeContent>
  );
}
