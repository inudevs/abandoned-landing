import styled from 'styled-components';
import theme from 'styled-theming';

import Layout from '../atoms/Layout';

export const LayoutWithTheme = styled(Layout)`
  background: ${theme('mode', {
    dark: '#1b1e33',
    light: 'transparent',
  })};
`;

export default LayoutWithTheme;
