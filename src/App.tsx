
import HeaderComponent from "./components/Header";
import SideBarNavComponent from "./components/SideBarNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1280px] h-[100svh] m-auto">
        <HeaderComponent />
        {/* <ModalComponent /> */}
        <div className={`
        grid
        grid-cols-[1fr]
        lg:grid-cols-[minmax(150px,1fr)_3fr]
        border-x-4
        mt-14
        `}>
          <div className="absolute lg:relative translate-x-[-100%] lg:translate-x-0 border-r-4">
            <SideBarNavComponent />
          </div>
          <Outlet />
        </div>
    </div>
  );
}

export default App;
