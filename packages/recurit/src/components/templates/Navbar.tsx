import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FontAwesomeIcon from '../atoms/FontAwesomeIcon';

import {
  SlideIn,
  SlideInWithOpacity,
} from '../keyframes';

import brandName from '../assets/typography/name.png';
import brandSlogan from '../assets/typography/slogan.png';

import navbarData from '../../data/navbar.json';

interface INavigation {
  name: string;
  icon: string;
  route: string;
}

const navigations = navbarData as INavigation[];

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
  cursor: pointer;
`;

const Name = styled.img`
  height: 32px;
  transform: translateX(-140%);
  animation: ${SlideIn} 1.2s forwards;
  animation-delay: 1.5s;
`;

const Slogan = styled.img`
  height: 32px;
  transform: translateX(-300%);
  opacity: 0.3;
  animation: ${SlideInWithOpacity} 1.5s forwards;
  animation-delay: 1.5s;
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
  onClick?: () => void;
}

const NavbarItem: React.FC<INavbarItemProps> =
  ({ message, iconClassName = '', onClick }) => {
    return (
      <NavbarItemContainer
        onClick={onClick}
      >
        <FontAwesomeIcon className={iconClassName} />
        <NavbarItemText>
          {message}
        </NavbarItemText>
      </NavbarItemContainer>
    );
  };

const Navbar: React.FC<RouteComponentProps> = ({ history }) => (
  <NavbarContainer>
    <FixedContent>
      <Brand onClick={() => history.push('/')}>
        <Name src={brandName} />
        <Slogan src={brandSlogan} />
      </Brand>
      {navigations.map((nav: any, idx: number) => {
        const { name, icon, route } = nav;
        return (
          <NavbarItem
            key={`navigation-${idx}`}
            message={name}
            iconClassName={icon}
            onClick={() => history.push(route)}
          />
        );
      })}
    </FixedContent>
  </NavbarContainer>
);

export default withRouter<RouteComponentProps, any>(Navbar);
