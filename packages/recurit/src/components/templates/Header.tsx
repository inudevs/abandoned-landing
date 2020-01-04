import * as React from 'react';
import styled from 'styled-components';

import Separator from '../atoms/Separator';
import {
  TextForParagraph,
  TextForTitle,
} from '../atoms/Text';

type HeaderProps = {
  className?: string,
  title?: React.ReactNode,
  desc?: React.ReactNode,
  children?: React.ReactNode,
};

const ConditionallyWrapTitle: React.FC = ({ children }) =>
  React.isValidElement(children) ?
    children : <TextForTitle>{children}</TextForTitle>;

const ConditionallyWrapDesc: React.FC = ({ children }) =>
  React.isValidElement(children) ?
    children : <TextForParagraph>{children}</TextForParagraph>;

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
