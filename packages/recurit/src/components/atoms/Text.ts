import styled from 'styled-components';
import theme from 'styled-theming';

export const Text = styled.span`
  color: ${theme('mode', {
    dark: 'white',
  })};
`;

export default Text;

export const TextForTitle = styled.h1`
  color: ${theme('mode', {
    dark: '#fff',
    light: ' #000457',
  })};
  font-size: 3.1rem;
  font-weight: 700;
  word-break: keep-all;
  letter-spacing: -0.5px;
`;

export const TextForParagraph = styled.p`
  color: ${theme('mode', {
    dark: 'rgba(255, 255, 255, 0.85)',
    light: '#343887',
  })};
  font-weight: 600;
  font-size: 1.2rem;
`;

export const TextForSubtitle = Text.withComponent('h2');
export const TextForSmalltitle = Text.withComponent('h3');
export const TextForLabel = Text.withComponent('label');
