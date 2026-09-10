import Hero from "../../components/hero/Hero";
import "./_D_About.scss";
import aboutImg from "../../assets/about.jpg";
import Collapse from "../../components/collapse/Collapse";

function D_About() {
  return (
    <div className="layout-about">
      <Hero image={aboutImg} text={""} />
      <div className="dropdown-container">
        <Collapse
          text={"Fiabilité"}
          content={
            "Les annonces postées du Kasa garantissent une fiabilité totale. Les photos cont conformes aux logements, et toutes les informations sont égulièrement vérifiées par nos équipes."
          }
        />

        <Collapse
          text={"Respect"}
          content={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          text={"Service"}
          content={
            "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          }
        />
        <Collapse
          text={"Sécurité"}
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de verifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
}

export default D_About;
