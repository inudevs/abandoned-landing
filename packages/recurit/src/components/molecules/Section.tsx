import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

type SectionProps = {
  children: React.ReactNode,
  desc?: string,
  title: string,
};

const Section: React.FC<SectionProps> = ({ children, desc, title }) => {
  const [open, setOpen] = useState<boolean>(true);

  const onClickArrow = (): void => setOpen(!open);

  return (
    <Container>
      <Title
        onClick={onClickArrow}
      >
        <Arrow
          className={`fas fa-chevron-${ open ? 'up' : 'down' }`}
        />
        {title}
      </Title>
      <Desc>
        {desc}
      </Desc>
      {open ? children : (null)}
    </Container>
  );
};

export default Section;

const Container = styled.div`
`;

const Title = styled.h1`
  color: ${theme('mode', {
    dark: '#fff',
    light: '#000457',
  })};
  cursor: pointer;
  margin: 0;
  margin-bottom: 0.25rem;
`;

const Desc = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme('mode', {
    dark: 'rgba(255, 255, 255, 0.85)',
    light: '#343887',
  })};
`;

const Arrow = styled.i`
  margin-right: 1rem;
  color: ${theme('mode', {
    dark: '#fff',
    light: '#000457',
  })};
`;
