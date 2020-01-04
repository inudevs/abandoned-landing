import * as React from 'react';
import ReactSwitch from 'react-switch';

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
  />
);

export default Switch;
