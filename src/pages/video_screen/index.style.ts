import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh-100px);
  .text {
    background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 600;
    font-size: 18px;
  }
  .btn {
    margin-top: 20px;
  }
`;

export const VideoCardStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const VideoCardText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 12px;
  text-align: center;
  color: #121212;
  opacity: 0.6;
`;
export const DivBottom = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
