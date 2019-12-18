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
  width: 500px;
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
  right: 156px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  animation: breathe 3s ease infinite;

  @keyframes breathe {
    50% {
      transform: scale(1.025);
    }
    70% {
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
  right: 58px;
  top: 36px;
  transform: rotate(28deg);
  animation: lightbulb 3s ease infinite;

  @keyframes lightbulb {
    30% {
      transform: rotate(32deg);
    }
    60% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(28deg);
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
