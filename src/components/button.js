import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }
  let buttonText = show ? "GİZLE" : "YAZININ DEVAMI";

  return (
    <div className="btnAll">
      {show && children}
      <button className="btn" onClick={toggleShow}>
        {buttonText}
      </button>
    </div>
  );
}
