import * as React from 'react';

export interface IConditionalWrap {
  children: React.ReactNode;
}

interface IConditionalWrapAbstact extends IConditionalWrap {
  component: React.ComponentType;
}

export const ConditionalWrap: React.FC<IConditionalWrapAbstact> = ({
  children,
  component,
}) => {
  const Component = component;
  return React.isValidElement(children) ?
    children : <Component>{children}</Component>;
};

export default ConditionalWrap;
