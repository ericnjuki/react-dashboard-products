
import HeaderComponent from "./components/Header";
import SideBarNavComponent from "./components/SideBarNav";
import { Outlet } from "react-router-dom";
import ModalComponent from "./components/common/Modal";

function App() {
  return (
    <div className="max-w-[1280px] h-[100svh] m-auto">
        <HeaderComponent />
        <div className={`
        grid
        grid-cols-[1fr]
        lg:grid-cols-[1fr_3fr]
        mt-14
        border-x-4
        border-b-4
        `}>
          <div className="translate-x-[-100%] lg:translate-x-0 border-r-4">
            <div className="absolute lg:sticky lg:top-[56px]">
              <SideBarNavComponent />
            </div>
          </div>
          <Outlet />
        </div>
    </div>
  );
}

export default App;
