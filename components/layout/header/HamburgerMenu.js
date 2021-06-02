import * as Styled from './styles';

import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Hamburger onClick={() => setIsOpen(!isOpen)}>
      <Styled.HamBar isOpen={isOpen} />
    </Styled.Hamburger>
  );
}
