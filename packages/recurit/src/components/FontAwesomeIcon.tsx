import * as React from 'react';

type IconProps = {
  className: string;
};

const FontAwesomeIcon: React.FC<IconProps> = ({ className }) => (
  <i className={className} />
);

export default FontAwesomeIcon;
