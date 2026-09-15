import "./_Hero.scss";

function Hero({ image, text, gradient = "rgba(0,0,0,0.6)" }) {
  const bg = gradient
    ? `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${image})`
    : `url(${image})`;

  return (
    <div className="hero-content" style={{ backgroundImage: bg }}>
      {text}
    </div>
  );
}

export default Hero;
