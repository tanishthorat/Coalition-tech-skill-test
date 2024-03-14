import React from "react";

export default function Nav({ children, scrolled }) {
  return (
        <div className="nav-container">
          <h2>{children}</h2>
          <div className={`line ${scrolled ? "lineblue" : ""}`}></div>
        </div>
  );
}
