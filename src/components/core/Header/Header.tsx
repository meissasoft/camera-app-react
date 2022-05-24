import React from 'react';

import LessThenIcon from '@/assets/svg/lessthen-icon';

import { DivHeader, DivIcon, DivTitle, StyledText } from './Header.style';
import { IHeaderProps } from './Header.types';

function Header({ isLongText, text, onClick }: IHeaderProps) {
  const onIconCLick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <DivHeader>
      <div className="row flex">
        <DivIcon className="col-1" onClick={onIconCLick} isLongText={isLongText}>
          <LessThenIcon />
        </DivIcon>
        <DivTitle className="col-10" isLongText={isLongText}>
          <StyledText isLongText={isLongText}>{text}</StyledText>
        </DivTitle>
        <div className="col-1"></div>
      </div>
    </DivHeader>
  );
}

export default Header;
