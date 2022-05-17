import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const ButtonStyled = styled.button<{ backgroundColor?: string; hoverColor?: string; isLogin?: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  margin-left: 18px;
  margin-right: 18px;
  min-width: 100px;
  width: 90%;
  height: 50px;
  background-color: ${({ backgroundColor }) => `${backgroundColor || COLORS.LABEL_COLOR}`};
  color: ${COLORS.WHITE_100};
  border-radius: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.4896000027656555px;
  border: 0px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;

  background-image: linear-gradient(to right, #38568f 0%, #38a1f7 100%, #38568f 100%);
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  display: block;

  &:disabled {
    background-color: ${COLORS.GREY_90};
    cursor: not-allowed;
  }
  &:hover {
    background-image: linear-gradient(to right, #38568f 0%, #38a1f7 90%, #38568f 90%);
  }

  ${({ isLogin }) =>
    isLogin
      ? `background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 35%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;`
      : ''};
`;
