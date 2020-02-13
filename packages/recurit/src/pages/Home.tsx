import media from 'css-in-js-media';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
import { animated, useSpring } from 'react-spring';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import Button from '../components/atoms/Button';
import Layout from '../components/atoms/Layout';
import {
  TextForParagraph,
  TextForTitle,
} from '../components/atoms/Text';
import Header from '../components/templates/Header';
import PartnerShowcase from '../components/templates/PartnerShowcase';

import {
  OpacityFadeIn,
} from '../components/keyframes';
import { ScrollmagicEvent } from '../types/event';

import background from '../assets/illusts/background-1.png';
import illust from '../assets/illusts/inu-2020.png';

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const transform = (x: number, y: number) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const HeaderTitle: React.FC = () => {
  return (
    <TextForTitle>
      INU와 함께
      <br />
      새로운 역사를
      <br />
      만들어 나갈 사람을
      <br />
      찾습니다.
    </TextForTitle>
  );
};

const HeaderDesc: React.FC = () => {
  return (
    <TextForParagraph>
      2020년, 처음으로 시작합니다.
      <br />
      디미고에서의 시간을 누구보다 의미있게 보내고 싶은 사람을 원합니다.
    </TextForParagraph>
  );
};

const startImageSpring = () => ({
  from: {
    delay: 500,
    opacity: 0,
    transform: 'translateX(100%)',
  },
  to: {
    delay: 500,
    opacity: 1,
    transform: 'translateX(0%)',
  },
});

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [parallexSpring, setParallexSpring] = useSpring(() => ({
    config: { mass: 10, tension: 550, friction: 140 },
    xy: [0, 0],
  }));

  const [imageSpring, setImageSpring] = useSpring(() => ({
    delay: 0,
    opacity: 0,
    transform: 'translateX(100%)',
  }));

  return (
    <StyledLayout className="home">
      <Section>
        <h1>
          이루고,<br />
          누리다.<br />
          이누.<br />
        </h1>
      </Section>
      <PromoSection
        id="trigger"
        onMouseMove={({ clientX: x, clientY: y }) => setParallexSpring({ xy: calc(x, y) })}
      >
        <Controller>
          <Scene
            duration={200}
            classToggle="zap"
            triggerElement="#trigger"
            indicators={true}
          >
            {(_: number, event: ScrollmagicEvent) => {
              if (event.type === 'start') {
                // @ts-ignore
                setImageSpring(startImageSpring);
              }
              return (
                <>
                  <BackgroundLayer />
                  <BackgroundImage
                    src={background}
                  />
                  <animated.div
                    // @ts-ignore
                    style={{ transform: parallexSpring.xy.interpolate(transform) }}
                  >
                    <Image src={illust} style={imageSpring} />
                  </animated.div>
                  <AnimatedHeader
                    title={<HeaderTitle />}
                    desc={<HeaderDesc />}
                  >
                    <Button
                      onClick={() => history.push('/about')}
                    >
                      더 알아보기
                    </Button>
                  </AnimatedHeader>
                </>
              );
            }}
          </Scene>
        </Controller>
      </PromoSection>
      <Section>
        <PartnerShowcase />
      </Section>
    </StyledLayout>
  );
};

export default withRouter<RouteComponentProps, any>(Home);

const StyledLayout = styled(Layout)`
  height: auto;
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const PromoSection = styled(Section)`
  overflow: hidden;
  background-image: linear-gradient(to bottom right, #a6c4ff, #353A86);
`;

const BackgroundLayer = styled.div`
  background: ${theme('mode', {
    dark: '#020735',
    light: 'transparent',
  })};
  width: 100%;
  height: 100%;
  z-index: -3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  height: 100%;
  ${theme('mode', {
    dark: css`
      filter: invert(1);
    `,
  })};
`;

const Image = styled(animated.img)`
  position: absolute;
  top: -120px;
  right: -150px;
  width: 80rem;
  z-index: -1;

  ${media('<=tablet')} {
    width: 45rem;
    top: 110px;
    right: -170px;
  }
`;

const AnimatedHeader = styled(Header)`
  margin: auto 0;
  opacity: 0%;
  animation: ${OpacityFadeIn} 1.2s forwards;
  animation-delay: 1.2s;
`;
