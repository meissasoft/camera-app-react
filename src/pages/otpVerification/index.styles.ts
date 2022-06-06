import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div<{ isError: boolean }>`
  margin: 20px 0px 0px 0px;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
  .heading {
    padding-left: 20px;
    padding-right: 20px;
  }
  .inner {
    height: calc(100vh - 100px);
    padding: 20px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    align-content:  flex-start;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
    background: ${COLORS.WHITE};
    box-shadow: 0px -11px 13px rgba(0, 0, 0, 0.06);
    border-radius: 20px 20px 0px 0px;
  }

  .relative {
    position: relative;
    width: 100%;
  }

  .title{
    margin-top: 20px; 
    font-weight: 600;
    font-size: 20px;
    text-align: center,
    color: ${COLORS.BLACK_100},
  }

  .description {
    margin-top: 10px; 
    font-size: 18px;
    text-align: center;
    color: ${COLORS.GREY_12};
    opacity: 0.6;
  }

  .barIcon{
    cursor:pointer;
    display: flex;
    justify-content: center;
  } 

  .crossIcon{
    position:absolute;
    right: 0px;
    top: 10px;
    cursor: pointer;
  }

  .otpContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .otpInput {
    margin: 0px;
    font-size: 30px;
    font-weight: 700;
    width: 40px;
    border: none;
    outline: none;
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    ${({ isError }) => (isError ? `border-bottom: 2.5px solid red;` : `border-bottom: 2.5px solid rgba(0, 0, 0, 0.1);`)}
    margin-right: 10px;
    text-align: center;
    outline: none;
    caret-color: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    padding: 0px 10px;
  }
  .otpInput:focus,
  .otpInput:active
  {
 
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: 2.5px solid #38568f;
  }

  .text {
    background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .btn {
    padding: 0px 8px;
  }

  .btn-primary {
    outline: none;
    background-color: ${COLORS.PARROT_100};
    border-color: ${COLORS.PARROT_100};
    font-weight: 600;
    font-size: 12px;
  }

  .code-text {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${COLORS.GREY_12};
    opacity: 0.6;
  }

  .footer-container {
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    padding-bottom: 22px;
  }
`;

export const DivError = styled.div`
  margin-top: 10px;
  margin-bottom: -5px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #f11414;
`;
