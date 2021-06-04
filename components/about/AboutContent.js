import * as Styled from './styles';

export default function AboutContent() {
  return (
    <Styled.AboutContent
      variants={Styled.ContentVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.Header>About</Styled.Header>
      <Styled.Description fontSize="1.85rem">
        Griddy is a single page web application to help people learn CSS grid in
        an easy and interactive way.
      </Styled.Description>
      <Styled.Description fontSize="1.85rem">
        It was built with Next.js, Styled Components, and Framer Motion.
      </Styled.Description>
      <Styled.Description margin="1.6rem 0.8rem 0" fontSize="1.85rem">
        Created by Adrian Li.
      </Styled.Description>
      <Styled.LinkList>
        <Styled.LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Styled.Link href="https://github.com/Halmesn/Griddy">
            GitHub Repo
          </Styled.Link>
        </Styled.LinkItem>
        <Styled.LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Styled.Link href="https://adrianli.vercel.app">
            My Website
          </Styled.Link>
        </Styled.LinkItem>
      </Styled.LinkList>
    </Styled.AboutContent>
  );
}
