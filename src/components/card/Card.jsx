import imageData from "../../data/logements.json";
import "./_Card.scss";

function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="overlay"></div>
      <p>{title}</p>
    </div>
  );
}

export default Card;
