import React, { Fragment } from 'react';
import TextLoop from 'react-text-loop';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

import developerTitles from '../../data/titles/developer.json';

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

export default class DeveloperJob extends React.Component {
  public render() {
    return (
      <Layout className="developer-recurit">
        <Header
          title={<HeaderTitle />}
        />
      </Layout>
    );
  }
}
