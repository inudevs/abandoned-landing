import * as React from 'react';
import styled from 'styled-components';

import { TextForTitle } from '../../../components/atoms/Text';

const TitleBackground: React.FC = () => {
  return (
    <Group>
      <Line />
      <Line />
      <Line />
    </Group>
  );
};

const Title: React.FC = () => {
  return (
    <TitleWrapper>
      <TitleBackground />
      <TitleText>
        FALL IN,<br />
        TO YOU.<br />
        INU.
      </TitleText>
    </TitleWrapper>
  );
};

export default Title;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45px;
  left: 38px;
`;

const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  width: 240px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 9px;

  &:nth-child(2) {
    width: 160px;
  }

  &:last-child {
    width: 80px;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  height: 320px;
`;

const TitleText = styled(TextForTitle)`
  font-weight: 900;
  font-size: 78px;
  line-height: 1.2;
  position: absolute;
  z-index: 999;
  margin: 0;
  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 9px;
`;
