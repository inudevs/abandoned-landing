import { keyframes } from 'styled-components';

const Lighten = () => keyframes`
  25% {
    box-shadow: 0 0 64px #FDE39F;
  }
  65% {
    box-shadow: 0 0 129px #FDE39F;
  }
  100% {
    opacity: 0;
  }
`;

export default Lighten;
