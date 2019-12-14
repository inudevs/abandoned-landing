import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100%;
  min-width: 180px;
  background-image: linear-gradient(to bottom, #FDE39F, #FCDC88, #EFC038);
`;

const Navbar = () => (

  <NavbarContainer/>
);

export default Navbar;
