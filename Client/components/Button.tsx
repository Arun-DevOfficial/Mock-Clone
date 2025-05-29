type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => Promise<void>;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
