import "./_D_Gallery.scss";
import Card from "../card/card";
import imageData from "../../data/logements.json";

function D_Gallery() {
  return (
    <div className="gallery-grid">
      {imageData.map((item) => (
        <Card key={item.id} cover={item.cover} title={item.title} />
      ))}
    </div>
  );
}

export default D_Gallery;
