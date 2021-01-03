import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <footer
      className={`text-muted py-5  bg-${theme} text-${constrat}`}
    >
      <div className="container">
        <button onClick={toggleTheme} className="btn btn-dark">
          {theme} Mode{" "}
        </button>        
        <p className="mb-1">
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p className="mb-0">
          New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
          <a href="/docs/5.0/getting-started/introduction/">
            getting started guide
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
export default Footer;
