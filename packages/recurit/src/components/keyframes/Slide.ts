import { keyframes } from 'styled-components';

export const SlideIn = keyframes`
  100% {
    transform: translateX(0%);
  }
`;

export const SlideInWithOpacity = keyframes`
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const SlideInWithSlowerOpacity = keyframes`
  50% {
    opacity: 0.85;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const SlideForShowcase = keyframes`
  0%{
    transform:translateX(100%);
  }
  50%{
    transform:translateX(0%);
  }
  100%{
    transform:translateX(-100%);
  }
`;
