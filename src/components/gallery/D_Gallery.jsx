import "./_D_Gallery.scss";
import imageData from "../../data/logements.json";

function D_Gallery() {
  return (
    <div className="gallery">
      {imageData.map((item) => (
        <div key={item.id} className="gallery-grid">
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default D_Gallery;
