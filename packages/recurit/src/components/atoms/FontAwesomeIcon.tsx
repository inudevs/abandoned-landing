import * as React from 'react';

type IconProps = {
  className?: string;
  icon: string;
};

const FontAwesomeIcon: React.FC<IconProps> = ({ className = '', icon }) => (
  <i className={`${icon} ${className}`} />
);

export default FontAwesomeIcon;
