import * as Styled from 'components/quiz/styles';
import { ContentVariants } from 'components/about/styles';

import QuizForm from 'components/quiz/QuizForm';
import QuizSidebar from 'components/quiz/QuizSidebar';

import { useRouter } from 'next/router';

export default function QuizDetail() {
  const router = useRouter();
  const quizIndex = +router.query.quizIndex;

  return (
    <>
      <Styled.QuizContainer
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
      >
        {quizIndex && <QuizForm quizIndex={quizIndex - 1} />}
      </Styled.QuizContainer>
      <QuizSidebar />
    </>
  );
}
