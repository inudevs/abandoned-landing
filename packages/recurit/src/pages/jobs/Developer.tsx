import raw from 'raw.macro';
import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';

import developerTitles from '../../data/developer/titles.json';

import developerIllust from '../../assets/illusts/dev-4.png';
import lightbulbIllust from '../../assets/illusts/lightbulb.png';

import peopleIllust1 from '../../assets/illusts/people-1.png';
import peopleIllust2 from '../../assets/illusts/people-2.png';
import peopleIllust3 from '../../assets/illusts/people-3.png';

const CulturePost = raw('../../data/developer/culture.md');

const HeaderWrap = styled.div`
  height: 60vh;
  position: relative;
  box-shadow: 0px 7px 36px -8px rgba(227, 227, 227, 1);
`;

const IllustWrap = styled.div`
  position: absolute;
  right: 0;
  width: 62%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const IllustContainer = styled.div`
  position: relative;
  width: 700px;
  height: 100%;
`;

const IllustOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent 70%,
    rgba(256,256,256,0.5),
    #fff
  );
  z-index: 1;
`;

const DeveloperIllust = styled.img`
  height: 436px;
  position: absolute;
  bottom: 6px;
  right: 256px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  animation: breathe 3s ease infinite;

  @keyframes breathe {
    25% {
      transform: scale(1.025);
    }
    65% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const LightbulbIllust = styled.img`
  height: 145px;
  position: absolute;
  right: 188px;
  top: 36px;
  transform: rotate(28deg);
  animation: lightbulb 3s ease infinite;

  @keyframes lightbulb {
    25% {
      transform: rotate(40deg);
    }
    65% {
      transform: rotate(36deg);
    }
    100% {
      transform: rotate(28deg);
    }
  }
`;

const PeopleWrapper = styled.div`
  position: absolute;
  width: 256px;
  height: 100%;
  bottom: 20px;
  right: 0px;
`;

const PeopleSegments = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PeopleIllust = styled.img`
  position: absolute;
  bottom: 80px;

  &:first-child {
    left: 0;
    height: 149px;
    animation: breathe-people 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 1.5s;
  }

  &:nth-child(2) {
    right: 10px;
    height: 160px;
    animation: breathe-people 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 2s;
  }

  &:last-child {
    left: 50px;
    bottom: 30px;
    height: 150px;
    animation: breathe-people 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: 1s;
  }

  @keyframes breathe-people {
    25% {
      transform: scale(1.02);
    }
    65% {
      transform: scale(1.01);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledHeader = styled(Header)`
  height: unset;
  position: absolute;
  bottom: 2rem;
`;

const HeaderTitle: React.FC = () => {
  return (
    <span>
      <TextLoop
        interval={1800}
        springConfig={{ stiffness: 200, damping: 32 }}
      >
        {developerTitles.map((title, idx) =>
          <span key={`title-${idx}`}>
            {title.split('\n').map((item, key) =>
              <Fragment key={`title-fragment-${key}`}>
                {item}<br/>
              </Fragment>,
            )}
          </span>,
        )}
      </TextLoop>
      <br />
      개발자를 꿈꾼다면.
    </span>
  );
};

const Content = styled.div`
  padding: 1.8rem 2rem;
  width: 85%;
`;

export default class DeveloperJob extends React.Component {
  public render() {
    return (
      <Layout className="developer-recurit">
        <HeaderWrap>
          <IllustWrap>
            <IllustContainer>
              <IllustOverlay />
              <DeveloperIllust src={developerIllust} />
              <LightbulbIllust src={lightbulbIllust} />
              <PeopleWrapper>
                <PeopleSegments>
                  <PeopleIllust src={peopleIllust1} />
                  <PeopleIllust src={peopleIllust3} />
                  <PeopleIllust src={peopleIllust2} />
                </PeopleSegments>
              </PeopleWrapper>
            </IllustContainer>
          </IllustWrap>
          <StyledHeader
            title={<HeaderTitle />}
            desc="열정만 있다면, 최고로 만들어 드리겠습니다."
          />
        </HeaderWrap>
        <Content>
          <Markdown source={CulturePost} />
        </Content>
      </Layout>
    );
  }
}
