import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}