import styled from 'styled-components';
import theme from 'styled-theming';

const Separator = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 10px;
  width: 80px;
  background-color: ${theme('mode', {
    dark: '#fff',
    light: '#000457',
  })};
`;

export default Separator;
