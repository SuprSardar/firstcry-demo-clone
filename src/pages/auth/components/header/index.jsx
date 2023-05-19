import S from "./index.module.css";
import AppLogo from "../../../../assets/images/fc_logo-s.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={S.Header}>
      <Link to={"/"} className="contents" aria-label="home">
        <img className="h-auto w-auto mx-auto" src={AppLogo} alt="logo" height={59} width={126} />
      </Link>
    </header>
  );
};

export default Header;
