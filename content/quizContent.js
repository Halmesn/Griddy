export const QUIZ = {
  questions: [
    {
      question: 'What type of grid does the code above create?',
      answers: [
        'A grid with 2 columns of 200px width each and 3 rows with 300 px height each.',
        'A grid with 2 columns of 400px and 300px width and 3 rows with 200px, 120px, and 250px width.',
        'A flexbox layout.',
        'A grid with 3 columns of 200px, 120px, and 250px width and 2 rows of 400px and 300px height.',
      ],
    },
    {
      question: 'What type of grid does the code above create?',
      answers: [
        'A grid with 2 columns of 200px width each and 3 rows with 300 px height each.',
        'A grid with 2 columns of 200px width each and 2 rows with 300px height each.',
        'A flexbox layout.',
        'A grid with 2 columns of 300px width and 2 rows of 200 px width each.',
      ],
    },
    {
      question: 'Recreate the 5x3 grid above using the same area names.',
      answers: null,
    },
    {
      question: 'How is the grid item aligned based on the above code?',
      answers: [
        'It is aligned to the top vertically and to the right horizontally.',
        'It is aligned to the left horizontally and to the top vertically.',
        'It is aligned to the right horizontally and to the bottom vertically.',
        'It is aligned to the bottom vertically and to the left horizontally.',
      ],
    },
    {
      question:
        'What is the advantage of using fractional units over other units like percentages?',
      answers: [
        'There is no advantage.',
        'Fractional units only use the remaining free space, while other units use all of the space.',
        'It does not take into account the grid gap property, while percentages do.',
        'They display the content responsively when the viewport size is reduced.',
      ],
    },
    {
      question: 'What does the above CSS code do?',
      answers: [
        'It gives a horizontal gap of 10px and a vertical gap of 5px between grid items.',
        'It gives a vertical gap of 10px and a horizontal gap of 5px between two grids.',
        'It gives a vertical gap of 10px and a horizontal gap of 5px between grid items.',
        'It gives both a horizontal and vertical gap of 5px between grid items.',
      ],
    },
  ],
  codeSnippets: [
    [
      { indent: '0', text: 'display: grid;' },
      { indent: '0', text: 'grid-template-columns: 200px 120px 250px;' },
      { indent: '0', text: 'grid-template-rows: 400px 300px;' },
    ],
    [
      { indent: '0', text: 'display: grid;' },
      { indent: '0', text: 'grid-template-columns: 200px 200px;' },
      { indent: '0', text: 'grid-template-rows: 300px 300px;' },
    ],
    [{ noCodeSnippets: true }],
    [
      { indent: '0', text: '.grid-item' },
      { indent: '1rem', text: 'justify-self: right;' },
      { indent: '1rem', text: 'align-self: end;' },
      { indent: '0', text: '}' },
    ],
    [{ noCodeSnippets: true }],
    [{ indent: '0', text: 'grid-gap: 5px' }],
  ],
  correctAnswers: [
    1,
    {
      line1: 'header header header header header',
      line2: 'ads main_content main_content . sidebar',
      line3: 'footer footer footer footer footer',
    },
    2,
    1,
    3,
  ],
};
