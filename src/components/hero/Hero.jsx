import "./_Hero.scss";

function Hero({ image, text }) {
  return (
    <div
      className="hero-content"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
          url(${image})`,
      }}
    >
      {text}
    </div>
  );
}

export default Hero;
