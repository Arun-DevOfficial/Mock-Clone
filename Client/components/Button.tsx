import { ButtonProps } from "../types/types";

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}