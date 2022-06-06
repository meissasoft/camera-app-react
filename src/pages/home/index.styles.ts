import styled from '@emotion/styled';

export const BixDiv = styled.div`
  margin: 20px 20px 0px 20px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;
export const DivWrapper = styled.div`
  width: 100%;
  align-self: center;
`;
export const DivHeading = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  margin-top: 104px;
`;
export const DivLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;
export const DivHomeButton = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
