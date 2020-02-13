import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../components/atoms/Layout';
import Section from '../components/atoms/Section';
import PartnerShowcase from '../components/templates/PartnerShowcase';

import PromoSection from './sections/PromoSection';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [page, setPage] = useState<number>(0);

  const onChangePage = (idx: number) =>
    (idx > 0 && idx < 3) ? setPage(idx) : null;

  return (
    <StyledLayout className="home">
      <ReactPageScroller
        pageOnChange={onChangePage}
        customPageNumber={page}
      >
        <Section>
          <h1>
            이루고,<br />
            누리다.<br />
            이누.<br />
          </h1>
        </Section>
        <PromoSection />
        <Section>
          <PartnerShowcase />
        </Section>
      </ReactPageScroller>
    </StyledLayout>
  );
};

export default withRouter<RouteComponentProps, any>(Home);

const StyledLayout = styled(Layout)`
  height: auto;
`;
