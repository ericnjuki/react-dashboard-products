const ModalComponent = ({ children }:any) => {
  return (
    <div className={`
    grid
    h-full
    w-full
    bg-red-500
    fixed
    top-13
    border-r-4
    p-4
    `}>
      {children}
    </div>
  );
}
export default ModalComponent;