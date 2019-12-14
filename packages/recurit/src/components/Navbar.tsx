import React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from './FontAwesomeIcon';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  width: 13.5rem;
  background-image: linear-gradient(to bottom, #FDE39F, #FCDC88, #EFC038);
`;

const NavbarItemContainer = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  text-shadow: 0px 0px 25px red;
  padding: 1rem 1.25rem;
  height: fit-content;
  cursor: pointer;
  background-color: rgba(239, 192, 56, 0.2);
  transition: background-color 0.5s ease;

  &:hover,
  &.selected {
    background-color: rgba(239, 192, 56, 0.47);
  }
`;

const NavbarItemText = styled.span`
  margin-left: 0.8rem;
  font-size: 1.2rem;
`;

interface INavbarItemProps {
  message: string;
  iconClassName?: string;
}

const NavbarItem: React.FC<INavbarItemProps> = ({ message, iconClassName = '' }) => {
  return (
    <NavbarItemContainer>
      <FontAwesomeIcon className={iconClassName} />
      <NavbarItemText>
        {message}
      </NavbarItemText>
    </NavbarItemContainer>
  );
};

const Navbar = () => (
  <NavbarContainer>
    <NavbarItem message="알아보기" iconClassName="fas fa-info-circle" />
    <NavbarItem message="모집 공고" iconClassName="fas fa-paper-plane" />
  </NavbarContainer>
);

export default Navbar;
