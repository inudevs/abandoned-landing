import * as React from 'react';
import { animated } from 'react-spring';
import { TextForTitle } from '../../../components/atoms/Text';

type TitleProps = {
  className?: string;
  interpolated: any;
};

const Title: React.FC<TitleProps> = ({
  className = '',
  interpolated,
}) => {
  return (
    <AnimatedTitle
      className={className}
      style={{ transform: interpolated }}
    >
      INU와 함께<br />
      새로운 역사를<br />
      만들어 나갈 사람을<br />
      찾습니다.
    </AnimatedTitle>
  );
};

export default Title;

const AnimatedTitle = animated(TextForTitle);
