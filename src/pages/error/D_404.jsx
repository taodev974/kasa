import "./_D_404.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function D_404() {
  return (
    <div>
      <div className="layout-404">
        <Header />
        <p className="d-404-error">404</p>
        <p className="msg-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="d-404-lien-accueil" to={"/d_home"}>
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default D_404;
