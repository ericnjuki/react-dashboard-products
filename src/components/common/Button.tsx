const ButtonComponent = ({ className='', children, onClick }: any) => {
  return (
    <button className={`grid justify-center items-center h-full w-full ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default ButtonComponent;
