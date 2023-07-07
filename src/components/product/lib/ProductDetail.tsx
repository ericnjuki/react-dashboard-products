import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";

const ProductDetailComponent = ({ title, icon, tags, isEditable, onChange }: any) => {
  return (
    <div>
      <div className="flex mt-4">
        <IconContext.Provider value={{ className: "w-6 h-6" }}>
          <div>
            {icon}
          </div>
        </IconContext.Provider>
        <span className="pl-4">{title}</span>
      </div>
      <ul className="pt-4 flex flex-wrap">
        {/* TODO: proper customizability with isEditable? */}
        {tags.map((item:string, i:number) => {
          return <li className={`
          border-2
          text-xs
          font-semibold
          mr-2
          mb-2
          ${!isEditable && 'px-4 py-1'}
          ${isEditable && 'flex items-center justify-between'}
          `}
          key={`${i}${item}`}
          >
            <span className={`${isEditable && 'pl-2 pr-2 py-1'}`}>{item}</span>
            {isEditable && (
              <span className="border-l-2 h-full flex items-center bg-[--input-color]">
                <IconContext.Provider value={{ className: "w-5 h-5" }}>
                  <div>
                    <BiX />
                  </div>
                </IconContext.Provider>
              </span>
            )}
          </li>
        })}
        {isEditable && (
        <li className={`
        border-[--input-color]
        border-2
        text-xs
        font-semibold
        mr-2
        mb-2
        ${!isEditable && 'px-4 py-1'}
        ${isEditable && 'flex items-center justify-between'}
        `}>
          <input 
            placeholder="type and press enter" 
            type="text" 
            className="p-1 h-full w-full focus-visible:outline-none"
            // TODO: put in handler
            onKeyDown={(e: React.KeyboardEvent) => {
              const target = e.target as HTMLInputElement;
              if (e.code === 'Enter') {
                onChange(target.value);
                e.preventDefault();
              }
            }}
          />
        </li>
        )}
      </ul>
    </div>
  )
}
export default ProductDetailComponent;
