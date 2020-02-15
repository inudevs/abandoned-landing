import * as React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from '../../../components/atoms/FontAwesomeIcon';
import Section from '../../../components/atoms/Section';
import { TextForParagraph } from '../../../components/atoms/Text';

import Title from './Title';

const HeaderSection: React.FC = () => {
  return (
    <Container>
      <Side>
        <Brand>
          <Title />
          <Square />
          <Paragraph>
            디미고 아이디어 실험 동아리, 이누.
          </Paragraph>
        </Brand>
        <IconList>
          <Icon icon="fab fa-facebook" />
          <Icon icon="fab fa-github" />
        </IconList>
      </Side>
      <IllustSide />
    </Container>
  );
};

export default HeaderSection;

const Container = styled(Section)`
  position: relative;
  background-image: linear-gradient(to right, #f5b343, #f7ea63);
  display: flex;
  justify-content: center;
`;

const Side = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 2rem 2.8rem;
  justify-content: space-between;
`;

const Brand = styled.header`
  display: flex;
  flex-direction: column;
`;

const IconList = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.35rem;
  font-size: 1.8rem;
  color: #000457;
  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
  transition: color 0.2s ease;
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

const IllustSide = styled(Side)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 9px;
  height: 100%;
`;
