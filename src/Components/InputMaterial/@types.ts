import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface iInputProps{
  label?: string;
  id: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError | any;
  success?: FieldError | boolean;
}