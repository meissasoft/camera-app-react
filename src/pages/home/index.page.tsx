import router from 'next/router';

import React from 'react';

import Button from '@/components/core/Button';

import { BixDiv, DivHeading, DivHomeButton, DivLayout, DivWrapper } from './index.styles';

/**
 *
 * @returns Home page
 *
 */
const Home = () => {
  const handleStarted = () => {
    router.push('/language');
  };
  return (
    <BixDiv>
      <DivWrapper>
        <DivLayout>
          <DivHeading>Video KYC</DivHeading>
        </DivLayout>
      </DivWrapper>
      <DivHomeButton>
        <Button onClick={handleStarted} className="m-auto fw-bold">
          Get Started
        </Button>
      </DivHomeButton>
    </BixDiv>
  );
};

export default Home;
