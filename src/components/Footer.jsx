import React, {useContext} from 'react';

import ThemeContext from '../context/ThemeContext';

function Footer() {
  
  const {theme, toggleTheme} = useContext(ThemeContext)
  const constrat = theme === "light" ? "dark" : "light";
  return(
    
    <div className={`container-${theme} bg-${theme} text-${constrat}`}>
         <footer className={`text-muted py-5 footer-${theme} bg-${theme} text-${constrat}`}>
      <div className="container">
         <button onClick={toggleTheme} className="btn btn-dark">{theme} Mode </button>
            <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
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
    </div>
  )
}
export default Footer;