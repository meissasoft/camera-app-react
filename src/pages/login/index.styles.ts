import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
export const DivMain = styled.div`
  padding: 20px 20px;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .text {
    background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 600;
    font-size: 18px;
  }
  .loginInput {
    border: 1.2px solid #000000;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .separator {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    text-align: center;
    align-content: center;
    .separatorText {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #121212;
      opacity: 0.4;
    }
  }

  .separator::before,
  .separator::after {
    display: block;
    content: '';
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 10px;
    margin-top: -8px;
  }
  .separator:not(:empty)::before {
    margin-right: 0.25em;
  }
  .separator:not(:empty)::after {
    margin-left: 0.25em;
  }
`;
