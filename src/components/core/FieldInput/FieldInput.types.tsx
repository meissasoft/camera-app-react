import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  InputProps?: any;
  isDate?: boolean;
  error?: string;
}
