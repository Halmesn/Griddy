import * as Styled from './styles';
import { LinkList, LinkItem, Link } from 'components/about/styles';
import ButtonPrimary from 'components/layout/button/ButtonPrimary';

export default function Finish() {
  return (
    <Styled.Finish>
      <Styled.Header>Congratulations!</Styled.Header>
      <Styled.Header textAlign="center">
        You finished all lessons!
      </Styled.Header>
      <Styled.Description fontSize="2rem" textAlign="center">
        It's time to test your practical knowledge of CSS grid. Give our quiz a
        try!
      </Styled.Description>
      <ButtonPrimary href="/quiz/1">Start Quiz</ButtonPrimary>

      <Styled.Description fontSize="2rem" textAlign="center" maxWidth="48rem">
        Like Griddy? Star it on Github!
      </Styled.Description>
      <LinkList margin="0">
        <LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link href="https://github.com/Halmesn/Griddy">GitHub Repo</Link>
        </LinkItem>
      </LinkList>
      <Styled.Description fontSize="2rem" textAlign="center" maxWidth="48rem">
        Thinking of improving it? Create a Pull Request on Github!
      </Styled.Description>
      <LinkList margin="0">
        <LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link href="https://github.com/Halmesn/Griddy/pulls">
            Pull Request
          </Link>
        </LinkItem>
      </LinkList>
    </Styled.Finish>
  );
}
