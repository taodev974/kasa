import "./_D_Gallery.scss";
import Card from "../card/card";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";

function D_Gallery() {
  return (
    <div className="gallery-grid">
      {logements.map((logement) => (
        <Link
          key={logement.id}
          to={`/d_fiche-logement/${logement.id}`}
          className="card-link"
        >
          <Card cover={logement.cover} logement={logement.title} />
        </Link>
      ))}
    </div>
  );
}

export default D_Gallery;
