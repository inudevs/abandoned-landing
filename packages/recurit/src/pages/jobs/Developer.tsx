import raw from 'raw.macro';
import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';
import Section from '../../components/Section';

import {
  CrowdIllust,
  DeveloperIllust,
  LightbulbIllust,
} from '../../components/illusts';

import developerTitles from '../../data/developer/titles.json';
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

const DeveloperJob: React.FC = () => {
  return (
    <Layout className="developer-recurit">
      <HeaderWrap>
        <IllustWrap>
          <IllustContainer>
            <IllustOverlay />
            <CrowdIllust left={true} />
            <CrowdIllust />
            <LightbulbIllust />
            <DeveloperIllust />
          </IllustContainer>
        </IllustWrap>
        <StyledHeader
          title={<HeaderTitle />}
          desc="열정만 있다면, 최고로 만들어 드리겠습니다."
        />
      </HeaderWrap>
      <Content>
        <Section
          title="INU가 만들 개발 문화"
          desc="모두가 성장할 수 있는 동아리 협업 문화"
        >
          <Markdown source={CulturePost} />
        </Section>
      </Content>
    </Layout>
  );
};

export default DeveloperJob;
