import styled, { css } from 'styled-components';

type ButtonProps = {
  color?: string;
  bgColor?: string;
  focusColor?: string;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: fit-content;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.9rem 2.8rem;
  border: none;
  transition: background-color 0.2s ease;

  ${({
    color = 'white',
    bgColor = '#343887',
    focusColor = '#272b6e',
  }) => css`
    color: ${color};
    background-color: ${bgColor};

    &:hover,
    &:focus {
      background-color: ${focusColor};
    }
  `};
`;

export default Button;
