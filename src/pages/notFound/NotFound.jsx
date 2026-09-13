import "./_NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="layout-404">
      <p className="d-404-error">404</p>
      <p className="msg-error">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="d-404-lien-accueil" to={"/home"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
