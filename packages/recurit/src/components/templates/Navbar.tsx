import media from 'css-in-js-media';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FontAwesomeIcon from '../atoms/FontAwesomeIcon';
import Switch from '../atoms/Switch';

import {
  SlideIn,
  SlideInWithOpacity,
} from '../keyframes';

import { Theme } from '../../utils/useTheme';

import brandName from '../../assets/typography/name.png';
import brandSlogan from '../../assets/typography/slogan.png';

import navbarData from '../../data/navbar.json';

interface INavigation {
  name: string;
  icon: string;
  route: string;
}

const navigations = navbarData as INavigation[];

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
        <FontAwesomeIcon
          icon={iconClassName}
        />
        <NavbarItemText>
          {message}
        </NavbarItemText>
      </NavbarItemContainer>
    );
  };

interface INavbar extends RouteComponentProps {
  theme: Theme;
  onToggleTheme?: () => void;
}

const Navbar: React.FC<INavbar> = ({ history, theme, onToggleTheme }) => (
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
    <SwitchWrap>
      <StyledSwitch
        isToggled={theme === 'light'}
        onToggle={onToggleTheme}
      />
    </SwitchWrap>
  </NavbarContainer>
);

export default withRouter<INavbar, any>(Navbar);

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: auto;
  width: 13.5rem;
  background-image: linear-gradient(to right, #FDE39F, #FCDC88);
  position: relative;

  ${media('<=tablet')} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FixedContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  position: flex;
  flex-direction: column;

  ${media('<=tablet')} {
    position: unset;
  }
`;

const SwitchWrap = styled.div`
  width: inherit;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;

  ${media('<=tablet')} {
    position: unset;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSwitch = styled(Switch)`
  margin: 1rem 1.25rem;
`;

const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.8rem;
  cursor: pointer;

  ${media('<=tablet')} {
    width: fit-content;
  }
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

  ${media('<=tablet')} {
    display: none;
  }
`;

const NavbarItemText = styled.span`
  margin-left: 0.8rem;
  font-size: 1.2rem;
`;
