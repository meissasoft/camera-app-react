import styled from '@emotion/styled';

export const Div = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivSvg = styled.div`
  &:active {
    padding: 0px 0px 1px 0px;
  }
`;
export const DivTime = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 30px;
`;
