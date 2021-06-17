import * as Styled from 'components/learn/styles';
import { ContentVariants } from 'components/about/styles';

import Lesson from 'components/learn/Lesson';
import LessonSidebar from 'components/learn/lessonSidebar';
import Finish from 'components/learn/Finish';

import useLessonData from 'hooks/useLessonData';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LessonDetail() {
  const router = useRouter();
  const { lessonIndex } = router.query;

  const [lessonData, setLessonData] = useLessonData();

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => setShowSidebar(false), [lessonIndex]);

  const renderLesson = () => {
    switch (lessonIndex) {
      default:
        return (
          lessonIndex && (
            <Lesson
              lessonIndex={+lessonIndex}
              lessonData={lessonData[+lessonIndex - 1]}
              setLessonData={setLessonData[+lessonIndex - 1]}
            />
          )
        );

      case 'finish':
        return <Finish />;
    }
  };
  return (
    <>
      <Styled.LessonContainer
        variants={ContentVariants}
        initial="hidden"
        animate="visible"
      >
        {renderLesson()}
      </Styled.LessonContainer>
      <LessonSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}
