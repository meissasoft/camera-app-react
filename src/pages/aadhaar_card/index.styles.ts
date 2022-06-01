import styled from '@emotion/styled';

export const DivMain = styled.div`
  margin: 20px 20px 0px 20px;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivBottom = styled.div`
  margin: 20px 0 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  opacity: 0.6;
`;

export const DivHomeButton = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
  margin-top: 20px;
`;
