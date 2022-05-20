import styled from '@emotion/styled';

export const DivModelButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivModelButton1 = styled.div`
  flex-grow: 6;
  justify-content: flex-start;
`;

export const DivModelButton2 = styled.div`
  flex-grow: 6;
`;
export const ParagraphModel = styled.p`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.408px;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const BodyModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 270px;
  height: 160px;
  left: calc(50% - 270px / 2 + 0.5px);
  top: calc(50% - 160px / 2);
  background: rgba(0, 0, 0, 0.8);
  background: rgba(242, 242, 242, 0.8);
  backdrop-filter: blur(54.3656px);

  border-radius: 14px;
  .modal-body {
    width: 100%;
  }
  .modal-footer {
    width: 100%;
    padding: 0;
    flex-wrap: nowrap;
    border-top: 1px solid rgba(60, 60, 67, 0.29);
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .btn-primary {
    background-color: rgb(219 219 219);
    border-color: rgb(219 219 219);
    color: #007aff;
  }
  .modal-cont {
    border: none;
  }
  .col-5 {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .modal-footer > * {
    margin: 0;
    padding: 0.25rem;
  }
  .border-left {
    border-left: 1px solid rgba(60, 60, 67, 0.29);
  }
`;
export const ParagraphTextModel = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.078px;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const IineModel = styled.p`
  position: absolute;
  height: 0.5px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: rgba(60, 60, 67, 0.29);
`;
export const CenterModel = styled.p`
  left: calc(50% - 0.5px / 2 - 0.25px);
  bottom: 0px;
  background: rgba(60, 60, 67, 0.29);
`;
