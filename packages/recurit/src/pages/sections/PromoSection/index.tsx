import * as React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { config, useSpring } from 'react-spring';
import styled from 'styled-components';

import Section from '../../../components/atoms/Section';

import Content from './Content';

import { ScrollmagicEvent } from '../../../types/event';

type ClientPosition = {
  clientX: number;
  clientY: number;
};

const calc = (x: number, y: number) =>
  [x - window.innerWidth / 2, y - window.innerHeight / 2];

const startImageSpring = () => ({
  delay: 200,
  from: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
});

const startHeaderSpring = () => ({
  config: config.molasses,
  delay: 150,
  from: {
    opacity: 0,
    transform: 'translateY(200px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(-20px)',
  },
});

const PromoSection: React.FC = () => {
  const [parallexSpring, setParallexSpring] = useSpring(() => ({
    config: { mass: 10, tension: 550, friction: 140 },
    xy: [0, 0],
  }));

  const [imageSpring, setImageSpring] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(100%)',
  }));

  const [headerSpring, setHeaderSpring] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(200px)',
  }));

  const onMouseMove = ({ clientX: x, clientY: y }: ClientPosition): void =>
    setParallexSpring({ xy: calc(x, y) });

  return (
    <Container
      id="promo"
      onMouseMove={onMouseMove}
    >
      <Controller>
        <Scene
          duration={800}
          classToggle="zap"
          triggerElement="#promo"
          // indicators={true}
        >
          {(_: number, event: ScrollmagicEvent) => {
            if (event.type === 'start') {
              // @ts-ignore
              setImageSpring(startImageSpring);
              // @ts-ignore
              setHeaderSpring(startHeaderSpring);
            }
            return (
              <Content
                parallexSpring={parallexSpring}
                imageSpring={imageSpring}
                headerSpring={headerSpring}
              />
            );
          }}
        </Scene>
      </Controller>
    </Container>
  );
};

export default PromoSection;

const Container = styled(Section)`
  background-image: linear-gradient(to bottom right, #a6c4ff, #353A86);
`;
