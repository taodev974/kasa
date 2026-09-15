import "./_Home.scss";
import Hero from "../../components/hero/Hero";
import Gallery from "../../components/gallery/Gallery";
import heroImg from "../../assets/hero2.jpg";
import logements from "../../data/logements.json";

function Home() {
  return (
    <div className="layout-home">
      <Hero
        image={heroImg}
        text={"Chez vous, partout et ailleurs"}
        gradient="rgba(0,0,0,0.6)"
      />
      <Gallery logements={logements} />
    </div>
  );
}

export default Home;
