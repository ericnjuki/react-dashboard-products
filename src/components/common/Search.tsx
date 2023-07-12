import { IconContext } from "react-icons";
import { BiSearch, BiCaretDown } from "react-icons/bi";
import ButtonComponent from "./Button";

const SearchComponent = () => {
  return (
    <div className={`
      grid
      grid-cols-[50px_3fr]
      md:grid-cols-[50px_3fr_1fr]
      h-full
      items-center
    `}>
      <div className="grid justify-center">
        <IconContext.Provider value={{ className: "w-6 h-6 [stroke-width:1]" }}>
          <div>
            <BiSearch />
          </div>
        </IconContext.Provider>
      </div>
      <div className="h-full w-full text-2xl">
        <input type="text" className="h-full w-full focus-visible:outline-none [line-height:100%] bg-[--input-color]" />
      </div>
      <div className="hidden md:block h-full w-full">
        <ButtonComponent className="grid-cols-[5fr,1fr]">
          <span className="text-sm">
            Categories
          </span>
          <IconContext.Provider value={{ className: "w-2 h-2 [stroke-width:2]" }}>
            <div>
              <BiCaretDown />
            </div>
          </IconContext.Provider>
        </ButtonComponent>
        {/* <input type="button" value={`Categories`} /> */}
      </div>
    </div>
  )
}

export default SearchComponent;