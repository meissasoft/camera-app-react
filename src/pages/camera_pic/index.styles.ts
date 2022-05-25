import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background-color: black;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const VerificationStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const VerificationCardStyled = styled.div`
  text-align: center;
`;
export const VerificationTextStyled = styled.p`
  color: ${COLORS.WHITE};
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
`;
export const VerificationSmallTextStyled = styled.p`
  margin-top: 4px !important ;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  color: #e9e5e5;
  opacity: 0.6;
  padding: 0 30px;
`;
export const DivCameraBox = styled.div`
  margin: 50px 0;
  width: 100%;
  height: 220px;
  background: #323131;
  border: 1.5px solid #ffffff;
  border-radius: 8px;
`;
export const Canvas = styled.canvas`
  display: none;
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  @media (max-width: 436px) {
    object-fit: cover;
  }
`;
export const DivFlex = styled.div`
  display: flex;
  justify-content: center;
`;
