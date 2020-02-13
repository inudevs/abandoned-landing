import * as React from 'react';
import { animated } from 'react-spring';
import { TextForParagraph } from '../../../components/atoms/Text';

type ParagraphProps = {
  className?: string;
  interpolated: any;
};

const Paragraph: React.FC<ParagraphProps> = ({
  className = '',
  interpolated,
}) => {
  return (
    <AnimatedParagraph
      className={className}
      style={{ transform: interpolated }}
    >
      2020년, 처음으로 시작합니다.<br />
      디미고에서의 시간을 누구보다 의미있게 보내고 싶은 사람을 원합니다.
    </AnimatedParagraph>
  );
};

export default Paragraph;

const AnimatedParagraph = animated(TextForParagraph);
