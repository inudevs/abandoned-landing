import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Separator from '../../components/Separator';

import developerTitles from '../../data/titles/developer.json';

const Header = styled.header`
  height: 45vh;
  padding: 0 2rem;
  padding-top: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
`;

const Title = styled.h1`
  color: #000457;
  font-size: 3.1rem;
  font-weight: 700;
`;

export default class DeveloperJob extends React.Component {
  public render() {
    return (
      <Layout className="developer-recurit">
        <Header>
          <Content>
            <Title>
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
            </Title>
            <Separator />
          </Content>
        </Header>
      </Layout>
    );
  }
}
