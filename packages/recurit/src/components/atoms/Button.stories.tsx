import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => <Button>클릭하기</Button>);
