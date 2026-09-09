import Header from "../../components/header/Header";
import "./_D_Fiche-Logement.scss";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";

function D_FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);
  if (!logement) return <h2>Logement introuvable</h2>;

  return (
    <>
      <div className="layout-d-fiche-logement">
        <Header />
        <Carousel pictures={logement.pictures} />
        <p className="title">
          {logement.title}
          <br />
          <span className="location">{logement.location}</span>
        </p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="collapse">
          <Collapse text={"Description"} content={logement.description} />
          <Collapse text={"Équipements"} content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default D_FicheLogement;
