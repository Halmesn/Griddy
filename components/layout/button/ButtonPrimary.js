import * as Styled from './styles';

import { useRouter } from 'next/router';

export default function ButtonPrimary({
  href,
  onClick,
  margin,
  children,
  solution,
  className,
}) {
  const router = useRouter();

  const onButtonClick = () => {
    href && router.push(href);
    onClick && onClick();
  };

  return (
    <Styled.Button
      onClick={onButtonClick}
      margin={margin}
      whileHover={{ scale: 1.075 }}
      whileTap={{ scale: 1 }}
      solution={solution}
      className={className}
    >
      {children}
    </Styled.Button>
  );
}
