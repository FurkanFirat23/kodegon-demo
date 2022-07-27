import React, { useState } from "react";

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  let buttonText = show ? "GİZLE" : "YAZININ DEVAMI";

  return (
    <div className="btnAll">
      {show && children}
      <button className="btn" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}