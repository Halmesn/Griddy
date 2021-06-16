export const LESSON = {
  initialStates: [
    {
      display: '',
      templateCols: '',
      templateRows: '',
    },
    {
      justifySelf: '',
      alignSelf: '',
    },
    {
      templateArea1: '',
      templateArea2: '',
      templateArea3: '',
      headerArea: '',
      sidebarArea: '',
      mainContentArea: '',
      footerArea: '',
    },
    {
      gap: '',
      templateCols: '33.333% 66.666%',
      templateRows: '10% 80% 10%',
    },
  ],
  solutions: [
    {
      display: 'grid',
      templateCols: '50% 50%',
      templateRows: '133px 133px 133px',
    },
    { justifySelf: 'start', alignSelf: 'end' },
    {
      templateArea1: 'header header',
      templateArea2: 'sidebar main-content',
      templateArea3: 'footer footer',
      headerArea: 'header',
      sidebarArea: 'sidebar',
      mainContentArea: 'main-content',
      footerArea: 'footer',
    },
    { gap: '8px 10px', templateCols: '1fr 2fr', templateRows: '1fr 8fr 1fr' },
  ],
};
