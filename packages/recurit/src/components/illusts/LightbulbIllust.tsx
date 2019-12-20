import * as React from 'react';
import styled from 'styled-components';

import illust from '../../assets/illusts/lightbulb.png';
import { Lighten, Shake } from '../keyframes';

const Light = styled.figure`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(253, 227, 159, 0.3);
  box-shadow: 0 0 5px #FDE39F;
  position: absolute;
  right: 118px;
  top: 60px;
  animation: ${Lighten} 3s ease infinite;
`;

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
    <>
      <Light />
      <Illust src={illust} />
    </>
  );
};

export default LightbulbIllust;
