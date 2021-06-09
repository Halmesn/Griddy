import Sidebar from 'components/layout/sidebar/Sidebar';

import { useState } from 'react';

export default function QuizSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    { text: 'question1', href: '/quiz/1' },
    { text: 'question2', href: '/quiz/2' },
    { text: 'question3', href: '/quiz/3' },
    { text: 'question4', href: '/quiz/4' },
    { text: 'question5', href: '/quiz/5' },
  ];

  return (
    <Sidebar
      links={links}
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
      quiz
    >
      Questions
    </Sidebar>
  );
}
