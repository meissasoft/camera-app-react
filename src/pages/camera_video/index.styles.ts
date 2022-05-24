import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background-color: black;
  height: 100vh;
  padding: 20px;
`;
export const VerificationStyled = styled.div`
  padding: 20px 0px;
  list-group-item: list-group-item-action;
  display: flex;
  align-items: center;
  flex-direction: column;
}
`;
export const VerificationCardStyled = styled.div`
  text-align: center;
`;
export const VerificationTextStyled = styled.p`
  color: ${COLORS.WHITE};
  margin-top: 1%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
  @media (max-width: 300px) {
    font-size: 18px;
  }
`;
export const VerificationSmallTextStyled = styled.p`
  margin-top: 4px !important ;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #e9e5e5;
  opacity: 0.6;
  @media (max-width: 300px) {
    font-size: 13px;
  }
`;
export const DivCameraBox = styled.div<{ background: boolean }>`
  margin: 10px 0;
  width: 340px;
  height: 340px;
  border-radius: 200px;
  border-style: dashed;
  background: #8daef9;
  background:  ${({ background }) => (background ? '#8daef9;' : '#323131;')} 

  border-color: #ffffff;
  @media (max-width: 300px) {
    width: 270px;
    height: 270px;
  }
  @media (max-height: 667px) {
    width: 270px;
    height: 270px;
  }
`;
export const Canvas = styled.canvas`
  display: none;
`;
export const Video = styled.video<{ isDone: boolean }>`
  ${({ isDone }) => (isDone ? 'opacity: 0.7;' : '')}
  width: 334px;
  height: 334px;
  border-radius: 200px;
  object-fit: cover;
  @media (max-width: 300px) {
    width: 265px;
    height: 265px;
  }
  @media (max-height: 667px) {
    width: 265px;
    height: 265px;
  }
`;

export const DiveDone = styled.div`
  position: absolute;
  margin-top: -175px;
  margin-left: 163px;
`;
export const DivWords = styled.div`
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
`;
export const CenterView = styled.div`
  display: flex;
  justify-content: center;
`;
