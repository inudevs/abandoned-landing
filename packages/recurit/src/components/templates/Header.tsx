import * as React from 'react';
import styled from 'styled-components';

import Separator from '../atoms/Separator';
import {
  TextForParagraph,
  TextForTitle,
} from '../atoms/Text';

import ConditionalWrap, { IConditionalWrap } from '../../utils/ConditionalWrap';

type HeaderProps = {
  className?: string,
  title?: React.ReactNode,
  desc?: React.ReactNode,
  children?: React.ReactNode,
};

const ConditionallyWrapTitle: React.FC<IConditionalWrap> = ({ children }) =>
  <ConditionalWrap
    children={children}
    component={TextForTitle}
  />;

const ConditionallyWrapDesc: React.FC<IConditionalWrap> = ({ children }) =>
  <ConditionalWrap
    children={children}
    component={TextForParagraph}
  />;

const Header: React.FC<HeaderProps> = ({
  className = '', title = '', desc = '', children,
}) => {
  return (
    <Container className={className}>
      <ConditionallyWrapTitle>
        {title}
      </ConditionallyWrapTitle>
      <Separator />
      <ConditionallyWrapDesc>
        {desc}
      </ConditionallyWrapDesc>
      {children}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 70vh;
  padding: 0 2rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
