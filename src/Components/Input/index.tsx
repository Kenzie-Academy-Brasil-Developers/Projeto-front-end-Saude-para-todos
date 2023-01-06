import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Styledfieldset } from "../styles";

interface iInputProps {
  label?: string;
  id: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  disabled?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const Input = ({
  type,
  id,
  label,
  placeholder,
  disabled,
  register,
}: iInputProps) => {
  return (
    <Styledfieldset>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
    </Styledfieldset>
  );
};
