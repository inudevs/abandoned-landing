import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type LayoutProps = {
  className?: string,
  children?: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => (
  <Container className={className}>
    {children}
  </Container>
);

export default Layout;
