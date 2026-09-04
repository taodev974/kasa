import "./_D_404.scss";
import { NavLink } from "react-router-dom";

function D_404() {
  return (
    <div className="page">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h2>Cette page n'existe pas</h2>
        <p>La page que vous cherchez semble introuvable.</p>
        <NavLink to="/" className="error-link">
          Retour à l'accueil
        </NavLink>
      </div>
    </div>
  );
}

export default D_404;
