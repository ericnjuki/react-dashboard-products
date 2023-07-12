import { Link } from "react-router-dom";
import ButtonComponent from "../common/Button";

const ProductTitleComponent = (
  { productTitle, productType, config }: { productTitle: string, productType: string, config: string }
  ) => {
  return (
    <div className={`
    grid
    grid-cols-[1fr_auto_auto]
    content-center
    border-b-4
    sticky
    top-14
    h-14
    bg-[--primary-color]
    z-10  
    `}>
      <span className="p-4 text-sm sm:text-xl font-bold">{productTitle}</span>
      {config === "Edit" ? (
        <Link to={"/product/1/edit"} className="h-full w-full justify-self-center self-center" >
          <ButtonComponent className="border-4 border-r-0 text-sm sm:text-base px-4 inverted font-bold">Edit</ButtonComponent>
        </Link>
      ) : (
        <div onClick={() => {}} className="h-full w-full justify-self-center self-center" >
          <ButtonComponent className="border-4 border-r-0 text-sm sm:text-base px-4 inverted font-bold">Save</ButtonComponent>
        </div>
      )}
      <span className="text-sm sm:text-base border-l-4 p-4">{productType}</span>
    </div>
  )
}

export default ProductTitleComponent;
