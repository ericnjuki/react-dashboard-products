import { IconContext } from "react-icons";
import { BiHome, BiShoppingBag } from "react-icons/bi";

const SideBarNavComponent = () => {
  return (
    <div className="flex flex-col sticky top-[56px]">
      <ul className="">
        <li className="flex p-4 border-b-4 h-14">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiHome />
              </div>
            </IconContext.Provider>
            <span className="pl-4">Home</span>
        </li>
        <li className="flex p-4 border-b-4 h-14">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiShoppingBag />
              </div>
            </IconContext.Provider>
            <span className="pl-4">Products</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBarNavComponent;
