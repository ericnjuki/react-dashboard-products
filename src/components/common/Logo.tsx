import { Link } from "react-router-dom";

const LogoComponent = ({ src }: { src?: string }) => {
  return (
    <Link to={'/'} className="h-full w-auto">
      <img src={src || "/vite.svg"} className="h-full w-auto" />
    </Link>
  );
}

export default LogoComponent;