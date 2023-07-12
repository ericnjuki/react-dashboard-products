import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";
import ButtonComponent from "./Button";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

type ModalProps = { 
  title: string,
  isActive: boolean,
  dismiss: (args?:any) => any, [key:string]: any 
}
const ModalComponent = (props: ModalProps) => {
  const { children, title = '', isActive = false, dismiss } = props;
  const config = props.config as IConfig;
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (config) {
      const primaryColorStyle = { 
        "--primary-color": config.mainColor,
      } as React.CSSProperties;
      setStyle(primaryColorStyle);
    }
  }, [config]);

  return (
    <div 
    style={style}
    className={`
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
const mapStateToProps = ({ app }: { app: IAppState }) => {
  const { config } = app;
  return { config }
}
export default connect(mapStateToProps, null)(ModalComponent);