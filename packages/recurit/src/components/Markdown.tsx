import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import CodeBlock from './CodeBlock';

const Container = styled.div`
  pre,
  pre * {
    font-family: Hack, monospace !important;
  }
`;

type MarkdownProps = {
  source: string;
};

const Markdown: React.FC<MarkdownProps> = ({ source }) => (
  <Container>
    <ReactMarkdown
      source={source}
      renderers={{ code: CodeBlock }}
    />
  </Container>
);

export default Markdown;
