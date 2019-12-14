import { configure } from '@storybook/react';

const req = require.context('../packages', true, /.stories.(js|mdx|tsx)$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
