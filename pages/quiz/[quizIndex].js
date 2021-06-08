import * as Styled from 'components/quiz/styles';
import { ContentVariants } from 'components/about/styles';

import QuizForm from 'components/quiz/QuizForm';
import QuizSidebar from 'components/quiz/QuizSidebar';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Results from 'components/quiz/Results';

export default function QuizDetail() {
  const router = useRouter();
  const quizIndex = router.query.quizIndex;

  const [quizOneAnswer, setQuizOneAnswer] = useState(null);
  const [quizTwoAnswer, setQuizTwoAnswer] = useState({});
  const [quizThreeAnswer, setQuizThreeAnswer] = useState(null);
  const [quizFourAnswer, setQuizFourAnswer] = useState(null);
  const [quizFiveAnswer, setQuizFiveAnswer] = useState(null);

  const results = [
    quizOneAnswer,
    quizTwoAnswer,
    quizThreeAnswer,
    quizFourAnswer,
    quizFiveAnswer,
  ];

  console.log(quizTwoAnswer);

  const renderQuizForm = () => {
    switch (quizIndex) {
      case '1':
        return (
          <QuizForm
            quizIndex={0}
            selectedAnswer={quizOneAnswer}
            setSelectedAnswer={setQuizOneAnswer}
          />
        );
      case '2':
        return (
          <QuizForm
            quizIndex={1}
            selectedAnswer={quizTwoAnswer}
            setSelectedAnswer={setQuizTwoAnswer}
          />
        );
      case '3':
        return (
          <QuizForm
            quizIndex={2}
            selectedAnswer={quizThreeAnswer}
            setSelectedAnswer={setQuizThreeAnswer}
          />
        );
      case '4':
        return (
          <QuizForm
            quizIndex={3}
            selectedAnswer={quizFourAnswer}
            setSelectedAnswer={setQuizFourAnswer}
          />
        );
      case '5':
        return (
          <QuizForm
            quizIndex={4}
            selectedAnswer={quizFiveAnswer}
            setSelectedAnswer={setQuizFiveAnswer}
          />
        );
      case 'results':
        return <Results results={results} />;
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
