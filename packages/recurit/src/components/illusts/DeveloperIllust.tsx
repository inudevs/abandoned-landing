import * as React from 'react';
import styled from 'styled-components';

import illust from '../../assets/illusts/dev-4.png';
import { BreathePrimary } from '../keyframes/Breathe';

const Image = styled.img`
  height: 436px;
  position: absolute;
  bottom: 6px;
  right: 226px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  animation: ${BreathePrimary} 3s ease infinite;
`;

const DeveloperIllust: React.FC = () => {
  return (
    <Image src={illust} />
  );
};

export default DeveloperIllust;
