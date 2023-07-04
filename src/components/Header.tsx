import Logo from "./Logo";
import SearchComponent from "./Search";

const HeaderComponent = ({ }: any) => {
  return (
    <nav className={`
    h-14
    grid
    grid-cols-[minmax(50px,1fr)_2fr_minmax(50px,1fr)]
    sm:grid-cols-[minmax(50px,0.51fr)_1.5fr_minmax(50px,1fr)]
    md:grid-cols-[minmax(150px,1fr)_3fr_minmax(150px,1fr)]
    border-4
    `}>
      <div className="border-r-4 flex">
        <div className="md:translate-x-[-100%] w-14 border-r-4">EE</div>
        <Logo />
      </div>
      <div className="border-r-4">
        <SearchComponent />
      </div>
      <div>
        profile
      </div>
    </nav>
  );
}

export default HeaderComponent;