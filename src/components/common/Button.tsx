type ButtonProps = {
  className?: string;
  onClick?: (args?: any) => any;
  [key: string]: any;
};
const ButtonComponent = ({
  className = '',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`grid justify-center items-center h-full w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ButtonComponent;
