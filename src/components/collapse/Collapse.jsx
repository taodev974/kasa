import "./_Collapse.scss";
import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";

function Collapse({ text, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <p>{text}</p>
        <img src={arrow} className={open ? "rotate" : ""} alt="arrow" />
      </div>

      <div className={`collapse-content ${open ? "open" : ""}`}>{children}</div>
    </div>
  );
}

export default Collapse;
