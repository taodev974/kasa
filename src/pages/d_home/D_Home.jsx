import Header from "../../components/header/Header";
import "./_D_Home.scss";
import Hero from "../../components/hero/Hero";
import D_Gallery from "../../components/gallery/D_Gallery";
import Footer from "../../components/footer/footer";

function D_Home() {
  return (
    <>
      <div className="layout-d-home">
        <Header />
        <Hero />
        <D_Gallery />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default D_Home;
