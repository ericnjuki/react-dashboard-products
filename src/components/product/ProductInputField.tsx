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
  const handleTextFieldChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  };
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
          className="p-1 h-full w-full focus-visible:outline-none bg-[--input-color]" 
          defaultValue={value}
          onChange={handleTextFieldChange} 
        />
      </div>
    </div>
  );
}
export default ProductInputFieldComponent;
