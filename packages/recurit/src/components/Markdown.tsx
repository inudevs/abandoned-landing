import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import CodeBlock from './CodeBlock';

const Container = styled.div`
  blockquote {
    font-size: 1.25em;
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid rgb(55, 53, 47);
  }

  code {
    background-color: #495057;
    color: white;
    font-size: 0.95rem;
    padding: 2px 3px;
    margin: 0 3px;
    border-radius: 3px;
  }

  pre code {
    background-color: transparent;
  }

  code,
  pre,
  pre * {
    font-family: Hack, monospace !important;
  }

  p {
    line-height: 1.5;
  }

  div.callout {
    background: #e9ecef;
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin: 1.25em 0;

    span:first-child {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    span:last-child {
      width: 100%;
      line-height: 1.6;
    }
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
      escapeHtml={false}
    />
  </Container>
);

export default Markdown;
