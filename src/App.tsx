
import HeaderComponent from "./components/Header";
import SideBarNavComponent from "./components/SideBarNav";
import MainComponent from "./components/Main";
import SideBarDetailsComponent from "./components/SideBarDetails";

function App() {
  return (
    <div className="max-w-[1280px] h-[100svh] m-auto">
        <HeaderComponent />
        <div className={`
        grid
        grid-cols-[0px_2fr]
        sm:grid-cols-[minmax(50px,1fr)_1fr_minmax(50px,1fr)]
        md:grid-cols-[minmax(150px,1fr)_3fr_minmax(150px,1fr)]
        border-x-4
        mt-14
        `}>
          <div className="absolute sm:relative translate-x-[-100%] md:translate-x-0 h-[100svh] border-r-4">
            <SideBarNavComponent />
          </div>
          <div className="h-[100svh] sm:border-r-4">
            <MainComponent />
          </div>
          <div className="h-[100svh] hidden sm:block">
            <SideBarDetailsComponent />
          </div>
        </div>
    </div>
  );
}

export default App;
