import "./_Host.scss";

function Host({ name, picture }) {
  const parts = name.split(" ");
  const firstName = parts.slice(0, parts.length - 1).join(" ");
  const lastName = parts[parts.length - 1];

  return (
    <div className="host">
      <p className="host-name">
        {firstName}
        <br />
        {lastName}
      </p>
      <img className="host-img" src={picture} alt={name} />
    </div>
  );
}

export default Host;
