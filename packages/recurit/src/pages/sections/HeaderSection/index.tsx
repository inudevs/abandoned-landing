import * as React from 'react';
import styled from 'styled-components';

import Section from '../../../components/atoms/Section';
import { TextForParagraph, TextForTitle } from '../../../components/atoms/Text';

import Title from './Title';

const HeaderSection: React.FC = () => {
  return (
    <Container>
      <Title />
      <Square />
      <Paragraph>
        디미고 아이디어 실험 동아리, 이누.
      </Paragraph>
    </Container>
  );
};

export default HeaderSection;

const Container = styled(Section)`
  position: relative;
  background-image: linear-gradient(to right, #f5b343, #f7ea63);
`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: #000457;
  margin-top: 10px;
  margin-left: 3px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
`;

const Paragraph = styled(TextForParagraph)`
  font-weight: 700;
  color: #000457;
  margin-left: 1px;
  margin-top: 1.5rem;
  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
`;
