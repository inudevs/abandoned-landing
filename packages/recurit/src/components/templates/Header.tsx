import * as React from 'react';
import styled from 'styled-components';

import Separator from '../atoms/Separator';

type HeaderProps = {
  className?: string,
  title?: React.ReactNode,
  desc?: React.ReactNode,
  children?: React.ReactNode,
};

const Header: React.FC<HeaderProps> = ({
  className = '', title = '', desc = '', children,
}) => {
  return (
    <Container className={className}>
      <Title>
        {title}
      </Title>
      <Separator />
      <Description>
        {desc}
      </Description>
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

const Title = styled.h1`
  color: #000457;
  font-size: 3.1rem;
  font-weight: 700;
`;

const Description = styled.p`
  color: #343887;
  font-weight: 600;
  font-size: 1.2rem;
`;
