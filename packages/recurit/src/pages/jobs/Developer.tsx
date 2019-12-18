import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';

import raw from 'raw.macro';

import developerTitles from '../../data/developer/titles.json';

const CulturePost = raw('../../data/developer/culture.md');

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
  padding: 0 2rem;
  width: 85%;
`;

export default class DeveloperJob extends React.Component {
  public render() {
    return (
      <Layout className="developer-recurit">
        <Header
          title={<HeaderTitle />}
          desc="열정만 있다면, 최고로 만들어 드리겠습니다."
        />
        <Content>
          <Markdown source={CulturePost} />
        </Content>
      </Layout>
    );
  }
}
