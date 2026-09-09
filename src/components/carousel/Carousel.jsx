import "./_Carousel.scss";
import arrowPrev from "../../assets/arrow-prev.svg";
import arrowNext from "../../assets/arrow-next.svg";
import { useState } from "react";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <img
        src={pictures[index]}
        alt={`photo ${index + 1}`}
        className="carousel-img"
      />

      {pictures.length > 1 && (
        <>
          <button className="carousel-btn left" onClick={prev}>
            <img src={arrowPrev} alt="Image précédent" />
          </button>
          <button className="carousel-btn right" onClick={next}>
            <img src={arrowNext} alt="Image suivant" />
          </button>

          <div className="carousel-counter">
            {index + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
