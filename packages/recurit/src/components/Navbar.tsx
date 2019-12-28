import React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from './FontAwesomeIcon';

import name from '../assets/typography/name.png';
import slogan from '../assets/typography/slogan.png';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: auto;
  width: 13.5rem;
  background-image: linear-gradient(to right, #FDE39F, #FCDC88);
  position: relative;
`;

const FixedContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  position: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.8rem;
`;

const Name = styled.img`
  /* width: 80px; */
  height: 32px;
`;

const Slogan = styled.img`
  height: 32px;
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
    <FixedContent>
      <Brand>
        <Name src={name} />
        <Slogan src={slogan} />
      </Brand>
      <NavbarItem message="알아보기" iconClassName="fas fa-info-circle" />
      <NavbarItem message="모집 공고" iconClassName="fas fa-paper-plane" />
    </FixedContent>
  </NavbarContainer>
);

export default Navbar;
