import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from './Button';

storiesOf('Task', module)
  .add('default', () => <Button>클릭하기</Button>);
