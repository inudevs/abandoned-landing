import { keyframes } from 'styled-components';

const Shake = keyframes`
  25% {
    transform: rotate(40deg);
  }
  65% {
    transform: rotate(36deg);
  }
  100% {
    transform: rotate(28deg);
  }
`;

export default Shake;
