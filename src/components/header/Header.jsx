import "./_Header.scss";
import { NavLink } from "react-router-dom";
import logo_k from "../../assets/Vector-k.svg";
import logo_a from "../../assets/Vector-a.svg";
import logo_s from "../../assets/Vector-s.svg";
import logo_group from "../../assets/Group.svg";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="d-logo">
          <img src={logo_k}></img>
          <img src={logo_group}></img>
          <img src={logo_s}></img>
          <img src={logo_a}></img>
        </div>
        <nav>
          <NavLink to="/d_home" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/d_about" className="nav-link">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
