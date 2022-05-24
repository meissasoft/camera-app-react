import React, { memo, useRef, useLayoutEffect } from 'react';

import usePrevious from './usePrevious';

export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function SingleOTPInputComponent({ focus, autoFocus, ...props }: SingleOTPInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <input ref={inputRef} {...props} inputMode="numeric" />;
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
