import styled from 'styled-components';

export const Text = styled.span`
`;

export default Text;

export const TextForTitle = Text.withComponent('h1');
export const TextForSubtitle = Text.withComponent('h2');
export const TextForSmalltitle = Text.withComponent('h3');
export const TextForParagraph = Text.withComponent('p');
export const TextForLabel = Text.withComponent('label');
