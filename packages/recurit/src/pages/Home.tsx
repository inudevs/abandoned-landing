import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Layout from '../components/Layout';

import illust from '../assets/illusts/inu-2020.png';

const Image = styled.img`
  position: absolute;
  top: -65px;
  right: -155px;
  width: 57rem;
  z-index: -1;
`;

export default function Home() {
  return (
    <Layout className="home">
      <Image src={illust} />
      <Header />
    </Layout>
  );
}
