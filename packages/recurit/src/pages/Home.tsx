import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/atoms/Button';
import Header from '../components/templates/Header';
import Layout from '../components/atoms/Layout';
import PartnerShowcase from '../components/templates/PartnerShowcase';

import {
  OpacityFadeIn,
  SlideInWithSlowerOpacity,
} from '../components/keyframes';

import background from '../assets/illusts/background-1.png';
import illust from '../assets/illusts/inu-2020.png';

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
  animation: ${OpacityFadeIn} 1.2s forwards;
  animation-delay: 1.2s;
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
      <PartnerShowcase />
    </StyledLayout>
  );
};

export default withRouter<RouteComponentProps, any>(Home);
