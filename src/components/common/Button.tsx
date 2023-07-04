const ButtonComponent = ({ className='', children }: any) => {
  return (
    <button className={`grid justify-center items-center h-full w-full ${className}`}>
      {children}
    </button>
  );
}
export default ButtonComponent;
