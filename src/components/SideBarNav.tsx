import { IconContext } from "react-icons";
import { BiHome, BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

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
            <span className="pl-4">
              <Link to={"/"}>Home</Link>
            </span>
        </li>
        <li className="flex p-4 border-b-4 h-14">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiShoppingBag />
              </div>
            </IconContext.Provider>
            <span className="pl-4">
              <Link to={"/products"}>Products</Link>
            </span>
        </li>
      </ul>
    </div>
  );
}

export default SideBarNavComponent;
