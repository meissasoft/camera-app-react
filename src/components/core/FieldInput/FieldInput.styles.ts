import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivRelative = styled.div`
  position: relative;
`;

export const FieldInputLabel = styled.label<{ value: string | number | readonly string[] | undefined }>`
  position: absolute;
  left: ${({ value }) => (value ? '10px' : '20px')};
  top: ${({ value }) => (value ? '-2px' : '20px')};
  pointer-events: none;
  display: flex;
  transition: 0.2s ease;
  background: ${COLORS.WHITE};
  font-size: ${({ value }) => (value ? '13px' : '16px')};
  &::before {
    transition: all 0.2s ease;
    position: absolute;
    height: 50%;
    width: 100%;
    content: '';
  }
  &::after {
    transition: all 0.2s ease;
    position: absolute;
    height: 50%;
    width: 100%;
    content: '';
    top: 50%;
  }
  span {
    position: relative;
    z-index: 99;
  }
`;

export const FieldInputStyled = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  color: ${({ error }) => (error ? COLORS.RED : COLORS.BLACK_100)};
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: ${({ error }) => (error ? `1px solid ${COLORS.RED}` : `1px solid rgba(18, 18, 18, 0.4)`)};
  &:focus {
    border: ${({ error }) => (error ? `1px solid ${COLORS.RED}` : `1px solid ${COLORS.BLUE_ACCENT}`)};
  }
  &:focus + .label {
    top: -2px;
    color: ${({ error }) => (error ? COLORS.RED : COLORS.BLACK_100)};
    left: 10px;
    font-size: 13px;
  }

  &:focus + .label::after {
    background: ${COLORS.WHITE};
  }

  &:focus + .label::before {
    background: ${COLORS.WHITE};
  }
`;

export const StyledErrorDiv = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;

export const StyledErrorText = styled.span`
  font-size: 11px;
  color: ${COLORS.RED};
  margin-top: -1px;
  font-weight: bold;
`;
