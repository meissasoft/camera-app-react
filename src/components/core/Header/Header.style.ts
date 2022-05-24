import styled from '@emotion/styled';

export const StyledText = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) =>
    isLongText
      ? `justify-content: flex-start; 
         margin-left: -8px;`
      : `justify-content: space-between;  
         text-align: center;`}
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  font-size: 20px;
`;

export const DivHeader = styled.div`
  .flex {
    display: flex;
    margin-bottom: 30px;
  }
`;
export const DivTitle = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) =>
    isLongText
      ? `width: 80%; 
       `
      : ``}
`;
export const DivIcon = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) => (isLongText ? `margin-top: 2px;` : ``)}
`;
