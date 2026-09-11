import "./_D_Home.scss";
import Hero from "../../components/hero/Hero";
import D_Gallery from "../../components/gallery/D_Gallery";
import heroImg from "../../assets/hero2.jpg";

function D_Home() {
  return (
    <div className="layout-d-home">
      <Hero image={heroImg} text={"Chez vous, partout et ailleurs"} />
      <D_Gallery />
    </div>
  );
}

export default D_Home;
