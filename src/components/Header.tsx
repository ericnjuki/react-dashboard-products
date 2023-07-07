import { IconContext } from "react-icons";
import { BiGlobe, BiCaretDown } from "react-icons/bi";
import Logo from "./Logo";
import SearchComponent from "./Search";
import ButtonComponent from "./common/Button";

const HeaderComponent = ({ }: any) => {
  return (
    <nav className={`
    h-14
    w-full
    grid
    fixed
    top-0
    grid-cols-[minmax(50px,1fr)_2fr_minmax(50px,1fr)]
    sm:grid-cols-[minmax(50px,0.51fr)_1.5fr_minmax(50px,1fr)]
    md:grid-cols-[minmax(150px,1fr)_3fr_minmax(150px,1fr)]
    border-4
    bg-[--primary-color]
    z-10
    `}>
      <div className="border-r-4 flex">
        <div className="md:translate-x-[-100%] w-14 border-r-4">EE</div>
        <Logo />
      </div>
      <div className="border-r-4">
        <SearchComponent />
      </div>
      <div className="grid grid-cols-2">
        <ButtonComponent className="border-r-4">
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <div>
              <BiGlobe />
            </div>
          </IconContext.Provider>
        </ButtonComponent>
        <ButtonComponent className="grid grid-cols-[2fr,1fr]">
          <div className={`
            bg-contain
            bg-no-repeat
            bg-[url('/user_8d48197d.png')]
            h-full
          `}></div>
          <div className="justify-self-center">
            <IconContext.Provider value={{ className: "w-2 h-2 [stroke-width:2]" }}>
              <div>
                <BiCaretDown />
              </div>
            </IconContext.Provider>
          </div>
        </ButtonComponent>
      </div>
    </nav>
  );
}

export default HeaderComponent;