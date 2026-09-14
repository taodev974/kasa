import "./_Gallery.scss";
import Card from "../card/Card";

import { Link } from "react-router-dom";

function Gallery({ logements }) {
  return (
    <div className="gallery-grid">
      {logements.map((logement) => (
        <Link
          key={logement.id}
          to={`/housingDetails/${logement.id}`}
          className="card-link"
        >
          <Card cover={logement.cover} title={logement.title} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
