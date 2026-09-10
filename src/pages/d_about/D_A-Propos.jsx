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
          children={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />

        <Collapse
          text={"Respect"}
          children={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou toute perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          text={"Service"}
          children={
            "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          }
        />
        <Collapse
          text={"Sécurité"}
          children={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement répond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
}

export default D_About;
