import { IconContext } from "react-icons";
import { BiHome, BiNetworkChart, BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBarNavComponent = () => {
  return (
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
              <Link to={"/product"}>Product</Link>
            </span>
        </li>
        <li className="flex p-4 border-b-4 h-14">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiNetworkChart />
              </div>
            </IconContext.Provider>
            <span className="pl-4">
              <Link to={"/organizations"}>Organizations</Link>
            </span>
        </li>
      </ul>
  );
}

export default SideBarNavComponent;
