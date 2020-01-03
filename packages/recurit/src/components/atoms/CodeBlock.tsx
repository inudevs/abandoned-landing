import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  language?: string;
  value: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ language = '', value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
