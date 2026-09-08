import Header from "../../components/header/Header";
import "./_D_Home.scss";
import Hero from "../../components/hero/Hero";
import D_Gallery from "../../components/gallery/D_Gallery";
import Footer from "../../components/footer/Footer";
import heroImg from "../../assets/hero2.jpg";

function D_Home() {
  return (
    <div>
      <div className="layout-d-home">
        <Header />
        <Hero image={heroImg} text={"Chez vous, partout et ailleurs"} />
        <D_Gallery />
      </div>

      <Footer />
    </div>
  );
}

export default D_Home;
