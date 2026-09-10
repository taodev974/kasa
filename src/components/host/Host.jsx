import "./_Host.scss";

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img className="host-img" src={picture} alt={name} />
    </div>
  );
}

export default Host;
