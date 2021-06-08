import * as Styled from 'components/quiz/styles';
import { ContentVariants } from 'components/about/styles';

import QuizForm from 'components/quiz/QuizForm';
import QuizSidebar from 'components/quiz/QuizSidebar';
import Results from 'components/quiz/Results';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function QuizDetail() {
  const router = useRouter();
  const quizIndex = router.query.quizIndex;

  const [quizOneAnswer, setQuizOneAnswer] = useState(null);
  const [quizTwoAnswer, setQuizTwoAnswer] = useState({});
  const [quizThreeAnswer, setQuizThreeAnswer] = useState(null);
  const [quizFourAnswer, setQuizFourAnswer] = useState(null);
  const [quizFiveAnswer, setQuizFiveAnswer] = useState(null);

  const answers = [
    quizOneAnswer,
    quizTwoAnswer,
    quizThreeAnswer,
    quizFourAnswer,
    quizFiveAnswer,
  ];

  const setAnswers = [
    setQuizOneAnswer,
    setQuizTwoAnswer,
    setQuizThreeAnswer,
    setQuizFourAnswer,
    setQuizFiveAnswer,
  ];

  const renderQuizForm = () => {
    switch (quizIndex) {
      default:
        return (
          quizIndex && (
            <QuizForm
              quizIndex={+quizIndex}
              selectedAnswer={answers[+quizIndex - 1]}
              setSelectedAnswer={setAnswers[+quizIndex - 1]}
            />
          )
        );
      case 'results':
        return <Results answers={answers} />;
    }
  };

  return (
    <>
      <Styled.QuizContainer
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
      >
        {renderQuizForm()}
      </Styled.QuizContainer>
      <QuizSidebar />
    </>
  );
}
