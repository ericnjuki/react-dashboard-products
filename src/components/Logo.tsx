import { Link } from "react-router-dom";

const LogoComponent = () => {
  return (
    <Link to={'/'}>
      <img src="/vite.svg" />
    </Link>
  );
}

export default LogoComponent;