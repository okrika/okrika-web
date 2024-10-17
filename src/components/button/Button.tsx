type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  rest?: any;
};
export default function Button({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg shadow-md active:shadow-sm active:border-okrika-green active:bg-white active:text-okrika-green text-white bg-okrika-green py-4  ${className} `}
      type="button"
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
