const ProductInputFieldComponent = (
  { 
    className,
    label,
    value,
    onChange
  } : { 
    className?: string,
    label: string,
    value:string,
    onChange: (arg?:any) => any
  }
  ) => {
  return (
    <div className={`
    flex
    h-14
    ${className}
    `}>
      <span className="pl-4 py-4 min-w-[8em]">{label}</span>
      <div className="h-full w-full p-3">
        <input 
          type="text"
          className="p-1 h-full w-full focus-visible:outline-none" 
          value={value}
          onChange={onChange} 
        />
      </div>
    </div>
  );
}
export default ProductInputFieldComponent;
