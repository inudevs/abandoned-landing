import * as React from 'react';
import ReactSwitch from 'react-switch';
import styled, { css } from 'styled-components';

import FontAwesomeIcon from './FontAwesomeIcon';

type SwitchProps = {
  className?: string;
  isToggled?: boolean;
  onToggle?: () => void;
};

export const Switch: React.FC<SwitchProps> = ({
  className = '',
  isToggled = true,
  onToggle = () => void(0),
}) => (
  <ReactSwitch
    className={className}
    checked={isToggled}
    onChange={onToggle}
    height={24}
    width={48}
    onColor="#FDB471"
    checkedIcon={<SwitchIcon icon="fas fa-sun" />}
    offColor="#343887"
    uncheckedIcon={<SwitchIcon icon="fas fa-moon" />}
    activeBoxShadow="0px 0px 25px orange"
  />
);

export default Switch;

type SwitchIconProps = {
  icon: string;
};

const SwitchIcon: React.FC<SwitchIconProps> = ({ icon }) => (
  <IconWrap>
    <StyledIcon
      icon={icon}
    />
  </IconWrap>
);

const IconWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)<SwitchIconProps>`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);

  ${({ icon }) => icon.includes('moon') && css`
    font-size: 15px;
  `};
`;
