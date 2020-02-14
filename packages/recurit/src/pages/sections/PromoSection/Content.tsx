import media from 'css-in-js-media';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  animated,
  AnimatedValue,
  ForwardedProps,
} from 'react-spring';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

import Button from '../../../components/atoms/Button';
import Header from '../../../components/templates/Header';

import Paragraph from './Paragraph';
import Title from './Title';

import background from '../../../assets/illusts/background-1.png';
import illust from '../../../assets/illusts/inu-2020.png';

const transform = {
  backgroundIllust: (x: number, y: number) =>
    `translate3d(${x / 10}px, ${y / 10}px, 0)`,
  header: (x: number, y: number) =>
    `translate3d(${x / 36}px, ${y / 36}px, 0)`,
};

type SpringElement = AnimatedValue<ForwardedProps<any>>;

type ContentProps = {
  parallexSpring: SpringElement;
  imageSpring: SpringElement;
  headerSpring: SpringElement;
};

const Content: React.FC<ContentProps & RouteComponentProps> = ({
  parallexSpring, imageSpring, headerSpring, history,
}) => {
  const headerParallexInterpolation = parallexSpring.xy.interpolate(transform.header);
  return (
    <>
      <BackgroundLayer />
      <BackgroundImage
        src={background}
      />
      <AnimatedContainer
        style={{
          transform: parallexSpring.xy.interpolate(
            // @ts-ignore
            transform.backgroundIllust,
          ),
        }}
      >
        <Image src={illust} style={imageSpring} />
      </AnimatedContainer>
      <AnimatedContainer
        style={headerSpring}
      >
        <AnimatedHeader
          title={
            <Title
              interpolated={headerParallexInterpolation}
            />
          }
          desc={
            <Paragraph
              interpolated={headerParallexInterpolation}
            />
          }
        >
          <Button
            onClick={() => history.push('/about')}
          >
            더 알아보기
          </Button>
        </AnimatedHeader>
      </AnimatedContainer>
    </>
  );
};

export default withRouter(Content);

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
`;

const AnimatedContainer = animated.div;
