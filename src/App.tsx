
import HeaderComponent from "./components/Header";
import SideBarNavComponent from "./components/SideBarNav";
import MainComponent from "./components/Main";
import SideBarDetailsComponent from "./components/SideBarDetails";
import ModalComponent from "./components/common/Modal";

function App() {
  return (
    <div className="max-w-[1280px] h-[100svh] m-auto">
        <HeaderComponent />
        {/* <ModalComponent /> */}
        <div className={`
        grid
        grid-cols-[1fr]
        md:grid-cols-[2fr_1fr]
        lg:grid-cols-[minmax(150px,1fr)_3fr_minmax(150px,1fr)]
        border-x-4
        mt-14
        `}>
          <div className="absolute lg:relative translate-x-[-100%] lg:translate-x-0 border-r-4">
            <SideBarNavComponent />
          </div>
          <div className="grid grid-rows-[min-content] md:border-r-4">
            <MainComponent />
          </div>
          <div className="hidden md:block">
            <SideBarDetailsComponent />
          </div>
        </div>
    </div>
  );
}

export default App;
