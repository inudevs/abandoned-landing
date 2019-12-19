import { keyframes } from 'styled-components';

type BreatheGeneratorProps = {
  primary?: boolean;
};

const BreatheGenerator = ({ primary = false }: BreatheGeneratorProps) => keyframes`
  25% {
    transform: scale(${ primary ? 1.025 : 1.02 });
  }
  65% {
    transform: scale(${ primary ? 1.02 : 1.01 });
  }
  100% {
    transform: scale(1);
  }
`;

export const BreathePrimary = BreatheGenerator({ primary: true });
export const Breathe = BreatheGenerator({});
