import "./_Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <nav>
          <NavLink to="/home" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-link">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
