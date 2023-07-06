import { IconContext } from "react-icons";

const ProductDetailComponent = ({ title, icon, tags }: any) => {
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
        {tags.map((item:string, i:number) => {
          return <li className={`
          border-2
          px-4
          py-1
          text-xs
          font-semibold
          inline
          mr-2
          mb-2
          `}
          key={`${i}${item}`}
          ><span>{item}</span></li>
        })}
      </ul>
    </div>
  )
}
export default ProductDetailComponent;
