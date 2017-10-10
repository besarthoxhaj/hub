import React from 'react';
import { storiesOf } from '@storybook/react';
import SnapShot from '../app/components/SnapShot';
import Journey from '../app/components/Journey';
import Wrapper from './_wrapper';

storiesOf('Journey', module)
  .add('default', () => {
    return (
      <Wrapper center>
        <Journey>
          <SnapShot numId="01"/>
          <SnapShot numId="02"/>
        </Journey>
      </Wrapper>
    );
  })
  // .add('complete', () => {
  //   return (
  //     <Wrapper center>
  //       <Journey
  //         mess={'Hello, World!'}
  //         href={'/profile?the=query'}
  //       />
  //     </Wrapper>
  //   );
  // })
