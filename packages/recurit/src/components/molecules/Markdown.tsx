import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import CodeBlock from '../atoms/CodeBlock';

const Container = styled.div`
  color: rgba(0, 0, 0, 0.85);

  h1 {
    border-bottom: 1px solid rgba(52, 56, 135, 0.2);
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2.5rem;
  }

  blockquote {
    font-size: 1.25rem;
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 5px solid rgba(52, 56, 135, 0.2);
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