import * as Styled from 'components/quiz/styles';
import { ContentVariants } from 'components/about/styles';

import QuizForm from 'components/quiz/QuizForm';
import QuizSidebar from 'components/quiz/QuizSidebar';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function QuizDetail() {
  const router = useRouter();
  const quizIndex = router.query.quizIndex;

  const [quizOneAnswer, setQuizOneAnswer] = useState(null);
  const [quizTwoAnswer, setQuizTwoAnswer] = useState(null);
  const [quizThreeAnswer, setQuizThreeAnswer] = useState(null);
  const [quizFourAnswer, setQuizFourAnswer] = useState(null);
  const [quizFiveAnswer, setQuizFiveAnswer] = useState(null);

  return (
    <>
      <Styled.QuizContainer
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
      >
        {quizIndex === '1' && (
          <QuizForm
            quizIndex={0}
            selectedAnswer={quizOneAnswer}
            setSelectedAnswer={setQuizOneAnswer}
          />
        )}
        {quizIndex === '2' && (
          <QuizForm
            quizIndex={1}
            selectedAnswer={quizTwoAnswer}
            setSelectedAnswer={setQuizTwoAnswer}
          />
        )}
        {quizIndex === '3' && (
          <QuizForm
            quizIndex={2}
            selectedAnswer={quizThreeAnswer}
            setSelectedAnswer={setQuizThreeAnswer}
          />
        )}
        {quizIndex === '4' && (
          <QuizForm
            quizIndex={3}
            selectedAnswer={quizFourAnswer}
            setSelectedAnswer={setQuizFourAnswer}
          />
        )}
        {quizIndex === '5' && (
          <QuizForm
            quizIndex={4}
            selectedAnswer={quizFiveAnswer}
            setSelectedAnswer={setQuizFiveAnswer}
          />
        )}
      </Styled.QuizContainer>
      <QuizSidebar />
    </>
  );
}
