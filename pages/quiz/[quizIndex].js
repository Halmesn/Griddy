import * as Styled from 'components/quiz/styles';
import { ContentVariants } from 'components/about/styles';

import QuizForm from 'components/quiz/QuizForm';
import QuizSidebar from 'components/quiz/QuizSidebar';
import Results from 'components/quiz/Results';

import useQuizChoice from 'hooks/useQuizChoice';

import { useRouter } from 'next/router';

export default function QuizDetail() {
  const router = useRouter();
  const { quizIndex } = router.query;

  const [choices, setChoices] = useQuizChoice();

  const renderQuizForm = () => {
    switch (quizIndex) {
      default:
        return (
          quizIndex && (
            <QuizForm
              quizIndex={+quizIndex}
              selectedChoice={choices[+quizIndex - 1]}
              setSelectedChoice={setChoices[+quizIndex - 1]}
            />
          )
        );
      case 'results':
        return <Results choices={choices} />;
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
