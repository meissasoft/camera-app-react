import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background-color: ${COLORS.BLACK_100};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DivCentered = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CardStyled = styled.div`
  text-align: center;
`;
export const TextStyled = styled.p`
  color: ${COLORS.WHITE};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
`;
export const SmallTextStyled = styled.p`
  margin-top: 4px !important ;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  color: #e9e5e5;
  opacity: 0.6;
`;
export const DivCameraBox = styled.div`
  margin: 50px 20px;
  width: 100%;
  height: 220px;
  background: ${COLORS.BLACK_100};
  display: flex;
  justify-content: center;
`;
export const Canvas = styled.canvas`
  display: none;
`;
export const Video = styled.video`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border: 1.5px solid ${COLORS.WHITE};
  border-radius: 8px;
`;
export const DivFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${COLORS.BLACK_100};
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding: 0px 20px 22px 20px;
`;
