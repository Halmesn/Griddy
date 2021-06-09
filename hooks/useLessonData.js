import { useState } from 'react';

import { LESSON } from 'content/lessonContent';

export default function useLessonData() {
  const { initialState } = LESSON;

  const [lessonOneData, setLessonOneData] = useState(initialState[0]);
  const [lessonTwoData, setLessonTwoData] = useState(initialState[1]);
  const [lessonThreeData, setLessonThreeData] = useState(initialState[2]);
  const [lessonFourData, setLessonFourData] = useState(initialState[3]);

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
