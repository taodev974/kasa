import "./_Home.scss";
import Hero from "../../components/hero/Hero";
import D_Gallery from "../../components/gallery/Gallery";
import heroImg from "../../assets/hero2.jpg";

function Home() {
  return (
    <div className="layout-d-home">
      <Hero image={heroImg} text={"Chez vous, partout et ailleurs"} />
      <D_Gallery />
    </div>
  );
}

export default Home;
