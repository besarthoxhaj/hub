import React from 'react';
import { storiesOf } from '@storybook/react';
import SnapShot from '../app/components/SnapShot';
import Wrapper from './_wrapper';

storiesOf('SnapShot', module)
  .add('default', () => {
    return (
      <Wrapper center>
        <SnapShot />
      </Wrapper>
    );
  })
  .add('complete', () => {
    return (
      <Wrapper center>
        <SnapShot
          mess={'Hello, World!'}
          href={'/profile?the=query'}
        />
      </Wrapper>
    );
  })
