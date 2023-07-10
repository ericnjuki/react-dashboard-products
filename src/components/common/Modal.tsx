import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";
import ButtonComponent from "./Button";

const ModalComponent = ({ children, title = '', isActive = false, dismiss }:any) => {
  return (
    <div className={`
    h-full
    w-full
    max-w-[1280px]
    bg-[--primary-color]
    fixed
    top-14
    border-x-4
    translate-y-[100%]
    z-[-1]
    ${isActive && '[animation-fill-mode:forwards] animate-[wiggle_300ms_ease-out]'}
    `}>
      <div className={`
        grid
        grid-cols-[auto_3.5em]
        h-14
        border-b-4
        w-full
      `}>
        <div className={`
        flex
        items-center
        justify-center
        text-xl
        font-bold
        border-r-4`}>
          {title}
        </div>
        <ButtonComponent className="w-14 flex items-center justify-center" onClick={() => { dismiss() }}>
          <IconContext.Provider value={{ className: "w-6 h-6 [stroke-width:1]" }}>
            <div>
              <BiX />
            </div>
          </IconContext.Provider>
        </ButtonComponent>
      </div>
        {children}
    </div>
  );
}
export default ModalComponent;