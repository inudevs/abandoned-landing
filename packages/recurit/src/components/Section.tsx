import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Title = styled.h1`
  color: #000457;
  cursor: pointer;
  margin: 0;
  margin-bottom: 0.25rem;
`;

const Desc = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #343887;
`;

const Arrow = styled.i`
  margin-right: 1rem;
  color: #000457;
`;

type SectionProps = {
  children: React.ReactNode,
  title: string,
  desc?: string,
};

type SectionState = {
  open: boolean;
};

export default class Section extends React.Component<SectionProps, SectionState> {
  constructor(props: SectionProps) {
    super(props);

    this.state = {
      open: true,
    };

    this.onClickArrow = this.onClickArrow.bind(this);
  }

  public render() {
    const { title, children, desc = '' } = this.props;
    const { open } = this.state;
    return (
      <Container>
        <Title
          onClick={this.onClickArrow}
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
  }

  private onClickArrow() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }
}
