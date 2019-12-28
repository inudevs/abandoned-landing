import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Header from '../components/Header';
import Layout from '../components/Layout';

import {
  Opacity,
  SlideInWithSlowerOpacity,
} from '../components/keyframes';

import background from '../assets/illusts/background-1.png';
import illust from '../assets/illusts/inu-2020.png';

import partnerData from '../data/partners.json';

interface IPartner {
  logo: string;
  height: number;
  width: number;
}

const partners = partnerData as IPartner[];

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: -65px;
  right: -155px;
  width: 57rem;
  z-index: -1;
  transform: translateX(100%);
  animation: ${SlideInWithSlowerOpacity} 0.8s forwards;
  animation-delay: 0.5s;
  opacity: 0.65;
`;

const AnimatedHeader = styled(Header)`
  margin: auto 0;
  opacity: 0%;
  animation: ${Opacity} 1.2s forwards;
  animation-delay: 1.2s;
`;

const LogoContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  width: 100%;
  background: linear-gradient(45deg, #343887, #000457);
  z-index: -2;
  color: white;
  padding: 0 2rem;
`;

const LogoHeading = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const LogoSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 3rem;
    opacity: 0.6;
    filter: brightness(0) invert(1);
  }
`;

const HeaderTitle: React.FC = () => {
  return (
    <span>
      INU와 함께
      <br />
      새로운 역사를
      <br />
      만들어 나갈 사람을
      <br />
      찾습니다.
    </span>
  );
};

const HeaderDesc: React.FC = () => {
  return (
    <span>
      2020년, 처음으로 시작합니다.
      <br />
      디미고에서의 시간을 누구보다 의미있게 보내고 싶은 사람을 원합니다.
    </span>
  );
};

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <StyledLayout className="home">
      <Background src={background} />
      <Image src={illust} />
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
      <LogoContainer>
        <LogoHeading>Together With</LogoHeading>
        <LogoSlider>
          {partners.map(({ logo, height, width }, idx) => (
            <img
              key={`partner-${idx}`}
              height={`${height}px`}
              width={`${width}px`}
              src={require(`../assets/partners/${logo}.png`)}
            />
          ))}
        </LogoSlider>
      </LogoContainer>
    </StyledLayout>
  );
};

export default withRouter<RouteComponentProps, any>(Home);
