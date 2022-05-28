import React from 'react';

import { ArrowRight } from '@/assets/svg/arrow-right';
import { DoneIcon } from '@/assets/svg/done-icon';

import { DivContent, DivHeading, DivIcon, DivLabel, DivStep, DivStepLayout } from './StepsLayout.style';
import { StepsLayoutProps } from './StepsLayout.types';

function StepLayout({ step, content, isDisabled = false, heading, rightIcon, onClick }: StepsLayoutProps) {
  return (
    <DivStepLayout disabled={isDisabled} onClick={onClick}>
      <div className="d-flex">
        <div className="col-11">
          <DivLabel>
            <DivStep>
              <span className="text">{step}</span>
            </DivStep>
          </DivLabel>
          <DivHeading>{heading}</DivHeading>
          <DivContent>{content}</DivContent>
        </div>
        <DivIcon>
          <div className="col-1 divIcon">{rightIcon === 'done' ? <DoneIcon /> : <ArrowRight />}</div>
        </DivIcon>
      </div>
    </DivStepLayout>
  );
}

export default StepLayout;
