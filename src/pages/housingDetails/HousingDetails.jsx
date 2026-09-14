import "./_HousingDetails.scss";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";
import { Navigate } from "react-router-dom";

function HousingDetails() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  if (!logement) return <Navigate to="/NotFound" replace />;

  return (
    <div className="layout-d-fiche-logement">
      <Carousel pictures={logement.pictures} className="carousel" />

      <div className="container-0">
        <div className="title-location">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div className="host-rating">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating value={logement.rating} className="rating" />
        </div>
      </div>
      <div className="collapse">
        <Collapse text="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse text="Équipements">
          <ul className="equip-list">
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default HousingDetails;
