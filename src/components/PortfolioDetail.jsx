import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { Portfolio } from "../Data_List/Portfolio";
import ThemeContext from "../context/ThemeContext";
import { Route } from "react-router-dom";

function PortfolioDetail(props) {
  const { personID } = useParams();
  const person = Portfolio.filter(item => item._id === Number(personID));

  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="container">
      <div className={`bg-${theme} text-${constrat}`}>
        <hr />
        <div className="d-flex justify-content-center">
          <img src={`${person[0].imgURL}`} />
        </div>
        <h1 className="mb-3">{person[0].title}</h1>
        <p>{person[0].detail}</p>
      </div>
    </div>
  );
}

export default PortfolioDetail;
