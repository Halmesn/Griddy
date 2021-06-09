import * as Styled from 'components/learn/styles';

import LessonSidebar from 'components/learn/lessonSidebar';

import { useState } from 'react';

export default function LessonDetail() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Styled.LessonContainer></Styled.LessonContainer>
      <LessonSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}
