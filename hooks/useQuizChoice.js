import { useState } from 'react';

export default function useQuizChoice() {
  const [quizOneChoice, setQuizOneChoice] = useState(null);
  const [quizTwoChoice, setQuizTwoChoice] = useState({});
  const [quizThreeChoice, setQuizThreeChoice] = useState(null);
  const [quizFourChoice, setQuizFourChoice] = useState(null);
  const [quizFiveChoice, setQuizFiveChoice] = useState(null);

  const choices = [
    quizOneChoice,
    quizTwoChoice,
    quizThreeChoice,
    quizFourChoice,
    quizFiveChoice,
  ];

  const setChoices = [
    setQuizOneChoice,
    setQuizTwoChoice,
    setQuizThreeChoice,
    setQuizFourChoice,
    setQuizFiveChoice,
  ];

  return [choices, setChoices];
}
