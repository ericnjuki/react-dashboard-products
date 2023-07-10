import { IconContext } from "react-icons";
import { BiGlobe, BiCaretDown, BiMenu } from "react-icons/bi";
import Logo from "./Logo";
import SearchComponent from "./Search";
import ButtonComponent from "./common/Button";
import ModalComponent from "./common/Modal";
import { useState } from "react";
import SideBarNavComponent from "./SideBarNav";

const HeaderComponent = ({ }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const dismissModal = () => { setShowMenu(false); }
  return (
    <>
      <ModalComponent isActive={showMenu} dismiss={dismissModal}>
        {/* TODO: can do better, maybe menu component? */}
        <div onClick={dismissModal}>
          <SideBarNavComponent />
        </div>
      </ModalComponent>
      <nav className={`
      h-14
      w-full
      max-w-[1280px]
      grid
      fixed
      top-0
      grid-cols-[1fr_3.5em]
      md:grid-cols-[2fr_1fr]
      lg:grid-cols-[1fr_2fr_1fr]
      border-4
      bg-[--primary-color]
      z-10
      `}>
        <div className="hidden lg:grid">
          <div className="border-r-4 flex items-center justify-center">
              <Logo />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-1">
          {/* logo */}
          <div className="border-r-4 flex items-center justify-center lg:hidden">
            <Logo />
          </div>

          {/* search */}
          <div className="border-r-4">
            <SearchComponent />
          </div>
        </div>

        {/* profile & localization */}
        <div className={`
          hidden 
          md:grid
          md:grid-cols-[1fr_1.5fr_3.5em]
          md:justify-self-end
          md:w-40
          lg:grid-cols-2
          lg:w-28
        `}>
          {/* localization */}
          <ButtonComponent className="border-r-4">
            <IconContext.Provider value={{ className: "w-6 h-6" }}>
              <div>
                <BiGlobe />
              </div>
            </IconContext.Provider>
          </ButtonComponent>

          {/* profile pic */}
          <ButtonComponent className="grid-cols-1">
            <div className={`
              bg-contain
              bg-no-repeat
              bg-[url('/user_8d48197d.png')]
              bg-[--secondary-color]
              h-full
              bg-center
            `}></div>
          </ButtonComponent>

          {/* menu button */}
          <ButtonComponent 
            className="lg:hidden w-14 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <IconContext.Provider value={{ className: "w-6 h-6 [stroke-width:1]" }}>
              <div>
                <BiMenu />
              </div>
            </IconContext.Provider>
          </ButtonComponent>
        </div>

        {/* menu button */}
        <ButtonComponent 
          className="md:hidden w-14 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <IconContext.Provider value={{ className: "w-6 h-6 [stroke-width:1]" }}>
            <div>
              <BiMenu />
            </div>
          </IconContext.Provider>
        </ButtonComponent>
      </nav>
    </>
  );
}

export default HeaderComponent;