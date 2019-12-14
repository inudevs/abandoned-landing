import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  children: ReactNode;
  color?: string;
  bgColor?: string;
  focusColor?: string;
  onClick?: () => void;
}

const Button: React.SFC<IButtonProps> =
  ({ children, color = 'white', bgColor = '#343887', focusColor = '#272b6e', onClick }) => {
    const Container = useMemo(
      () => styled.button`
        cursor: pointer;
        width: fit-content;
        margin-top: 2rem;
        color: ${color};
        background-color: ${bgColor};
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.9rem 2.8rem;
        border: none;
        transition: background-color 0.2s ease;

        &:hover,
        &:focus {
          background-color: ${focusColor};
        }
      `,
      [color, bgColor, focusColor],
    );

    return (
      <Container onClick={onClick}>
        {children}
      </Container>
    );
  };

export default Button;
