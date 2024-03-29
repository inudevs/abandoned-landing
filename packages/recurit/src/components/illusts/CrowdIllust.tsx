import * as React from 'react';
import styled, { css } from 'styled-components';

import Breathe from '../keyframes/Breathe';

const peopleIllusts = [...Array(3)].map((_, idx) =>
  require(`../../assets/illusts/people-${idx + 1}.png`),
);

type CrowdProps = {
  left?: boolean;
};

const CrowdWrapper = styled.div<CrowdProps>`
  position: absolute;
  width: 256px;
  height: 100%;
  bottom: 20px;
  right: 0px;
  ${({ left }) => left && css`
    left: 0px;
    right: unset;
    transform: scaleX(-1);
  `};
`;

const Crowd = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PeopleIllust = styled.img<CrowdProps>`
  position: absolute;
  bottom: 80px;

  &:first-child {
    left: 0;
    height: 149px;
    animation: ${Breathe} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 1.5s;

    ${({ left }) => left && css`
      animation-delay: 1.8s;
    `};
  }

  &:nth-child(2) {
    right: 10px;
    height: 160px;
    animation: ${Breathe} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 2s;

    ${({ left }) => left && css`
      animation-delay: 2.3s;
    `};
  }

  &:last-child {
    left: 50px;
    bottom: 30px;
    height: 150px;
    animation: ${Breathe} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 1s;

    ${({ left }) => left && css`
      animation-delay: 1.3s;
    `};
  }
`;

const CrowdIllust: React.FC<CrowdProps> = ({ left = false }) => {
  return (
    <CrowdWrapper left={left}>
      <Crowd>
        {peopleIllusts.map((illust, idx) =>
          <PeopleIllust
            src={illust}
            key={`crowd-${left}-${idx}`}
            left={left}
          />,
        )}
      </Crowd>
    </CrowdWrapper>
  );
};

export default CrowdIllust;
