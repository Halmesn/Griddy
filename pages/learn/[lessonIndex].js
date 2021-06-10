import * as Styled from 'components/learn/styles';
import { ContentVariants } from 'components/about/styles';

import Lesson from 'components/learn/Lesson';
import LessonSidebar from 'components/learn/lessonSidebar';

import useLessonData from 'hooks/useLessonData';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LessonDetail() {
  const router = useRouter();
  const { lessonIndex } = router.query;

  const [lessonData, setLessonData] = useLessonData();

  const [showSidebar, setShowSidebar] = useState(false);

  const renderLesson = () =>
    lessonIndex && (
      <Lesson
        lessonIndex={+lessonIndex}
        lessonData={lessonData[+lessonIndex - 1]}
        setLessonData={setLessonData[+lessonIndex - 1]}
      />
    );

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
