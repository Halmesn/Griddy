import Sidebar from 'components/layout/sidebar/Sidebar';

export default function LessonSidebar({ showSidebar, setShowSidebar }) {
  const links = [
    { text: 'Grid Creation', href: '/learn/1' },
    { text: 'Item Placement', href: '/learn/2' },
    { text: 'Grid Areas', href: '/learn/3' },
    { text: 'Grid Gap/fr unit', href: '/learn/4' },
  ];

  return (
    <Sidebar
      links={links}
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
    >
      Lessons
    </Sidebar>
  );
}
