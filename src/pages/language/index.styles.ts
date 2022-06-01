import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const StyledLanguage = styled.span<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  ${({ isActive }) =>
    isActive
      ? `background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;`
      : ''};
`;

export const StyledLine = styled.hr`
  opacity: 0.6;
  margin: 15px 5px 15px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledColor = styled.div`
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const DivMarginTop = styled.div`
  margin-top: -5px;
  overflow-y: scroll;
  overflow-x: hidden;
  /* height: calc(100vh - 200px); */
`;
export const FooterButtonStyle = styled.div`
  width: 100%;
  margin-top: 20px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
