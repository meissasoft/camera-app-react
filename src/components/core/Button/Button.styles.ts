import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const ButtonStyled = styled.button<{ backgroundColor?: string; hoverColor?: string }>`
  min-width: 100px;
  width: 100%;
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
`;