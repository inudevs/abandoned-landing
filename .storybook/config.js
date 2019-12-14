import { configure } from '@storybook/react';
import './global.css';

const req = require.context('../packages', true, /.stories.(js|mdx|tsx)$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
