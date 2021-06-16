import { useState } from 'react';

import { LESSON } from 'content/lessonContent';

export default function useLessonData() {
  const { initialStates } = LESSON;

  const [lessonOneData, setLessonOneData] = useState(initialStates[0]);
  const [lessonTwoData, setLessonTwoData] = useState(initialStates[1]);
  const [lessonThreeData, setLessonThreeData] = useState(initialStates[2]);
  const [lessonFourData, setLessonFourData] = useState(initialStates[3]);

  const lessonData = [
    lessonOneData,
    lessonTwoData,
    lessonThreeData,
    lessonFourData,
  ];

  const setLessonData = [
    setLessonOneData,
    setLessonTwoData,
    setLessonThreeData,
    setLessonFourData,
  ];

  return [lessonData, setLessonData];
}
