import * as React from 'react';
import styled from 'styled-components';

import illust from '../../assets/illusts/lightbulb.png';
import Shake from '../keyframes/Shake';

const Illust = styled.img`
  height: 145px;
  position: absolute;
  right: 138px;
  top: 36px;
  transform: rotate(28deg);
  animation: ${Shake} 3s ease infinite;
`;

const LightbulbIllust: React.FC = () => {
  return (
    <Illust src={illust} />
  );
};

export default LightbulbIllust;
