import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
  .css-mmdbdd {
    color: ${COLORS.Error};
  }
  .css-cssveg {
    width: 100%;
    margin-top: 40px;
  }
`;

export const StyledText = styled.span`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 18px;
`;

export const StyledSeperatorDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  text-align: center;
  align-content: center;

  &::before,
  &::after {
    display: block;
    content: '';
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 10px;
    margin-top: -8px;
  }
  &:not(:empty)::before {
    margin-right: 0.25em;
  }
  &:not(:empty)::after {
    margin-left: 0.25em;
  }
`;

export const StyledSeperatorText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #121212;
  opacity: 0.4;
`;

export const StyledInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
