import "./_NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="layout-404">
      <p className="error-404">404</p>
      <p className="msg-error">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="lien-accueil-404" to={"/home"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
