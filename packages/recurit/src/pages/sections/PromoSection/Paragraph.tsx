import * as React from 'react';
import { animated } from 'react-spring';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import { TextForParagraph } from '../../../components/atoms/Text';

const textloops = [
  '누구보다 의미있게',
  '단 하나의 후회도 없이',
  '그 무엇보다 갚진 시간들로',
  '그저 행복하고 즐겁게',
  '타오르는 열정을 가지고',
];

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
      디미고에서의 시간을<br />
      <TextLoop
        interval={1800}
        springConfig={{ stiffness: 200, damping: 32 }}
      >
        {textloops.map((text: string, idx: number) => (
          <TextLoopItem key={`textloop-${idx}`}>
            {text}
          </TextLoopItem>
        ))}
      </TextLoop><br />
      보내고 싶은 사람을 원합니다.
    </AnimatedParagraph>
  );
};

export default Paragraph;

const TextLoopItem = styled.span`
  color: white;
`;

const TextForParagraphWithDiv = TextForParagraph.withComponent('div');

const AnimatedParagraph = animated(styled(TextForParagraphWithDiv)`
  /* color: rgba(255, 255, 255, 0.45); */
  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
  line-height: 1.35;
`);
