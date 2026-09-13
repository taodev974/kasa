import "./_HousingDetails.scss";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import Host from "../../components/host/Host";
import Rating from "../../components/rating/Rating";

function HousingDetails() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  if (!logement) return <h2>Logement introuvable</h2>;

  return (
    <>
      <div className="layout-d-fiche-logement">
        <Carousel pictures={logement.pictures} className="carousel" />
        <div className="container-0">
          <div className="container-info">
            <div className="title">{logement.title}</div>
            <span className="location">{logement.location}</span>
          </div>
        </div>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="host-rating">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating value={logement.rating} className="rating" />
        </div>
        <div className="collapse">
          <Collapse text="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse text="Équipements">
            <ul className="equip-list">
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default HousingDetails;
