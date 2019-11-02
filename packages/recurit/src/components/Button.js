import React from 'react';
import styled from 'styled-components';

import useConstant from '../utils/useConstant';

function Button({ children = '', onClick = () => {} }) {
  const Container = useConstant(() => styled.button`
    cursor: pointer;
    width: fit-content;
    margin-top: 2rem;
    color: white;
    background-color: #343887;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.9rem 2.8rem;
    border: none;
  `);

  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
