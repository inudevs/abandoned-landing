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

const LogoContainer = styled.div`
  margin-top: auto;
  display: flex;
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
  margin: auto;
`;

export default function Home() {
  return (
    <Layout className="home">
      <Image src={illust} />
      <Header />
      <LogoContainer>
        <LogoHeading>Together With</LogoHeading>
      </LogoContainer>
    </Layout>
  );
}
