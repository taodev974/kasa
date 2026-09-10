import "./_Collapse.scss";
import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";

function Collapse({ content, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <p>{text}</p>
        <img src={arrow} className={open ? "rotate" : ""} alt="arrow" />
      </div>

      <div className={`collapse-content ${open ? "open" : ""}`}>
        {Array.isArray(content) ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
