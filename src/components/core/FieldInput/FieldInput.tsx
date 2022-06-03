import { useRef } from 'react';
import { ErrorInfo } from '@/assets/svg/error-info';
import { DivRelative, FieldInputStyled, FieldInputLabel, StyledErrorDiv, StyledErrorText } from './FieldInput.styles';
import { IInputProps } from './FieldInput.types';

const FieldInput = ({ className, placeholder, value, error, isDate, ...props }: IInputProps) => {
  const ref: any = useRef(null);

  console.log('value', value);

  const onFocus = () => {
    if (isDate) {
      ref.current.type = 'date';
    }
  };

  const onBlur = () => {
    if (isDate) {
      ref.current.type = 'text';
    }
  };

  return (
    <DivRelative>
      <FieldInputStyled
        {...props}
        className={`${className}`}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error && error.length > 0 ? true : false}
      />

      <FieldInputLabel className="label" value={value}>
        <span>{placeholder}</span>
      </FieldInputLabel>
      {error && error.length > 0 && (
        <StyledErrorDiv>
          <ErrorInfo />
          <StyledErrorText>{error}</StyledErrorText>
        </StyledErrorDiv>
      )}
    </DivRelative>
  );
};

export default FieldInput;
