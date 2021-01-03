import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { Portfolio } from "../Data_List/Portfolio";
import ThemeContext from "../context/ThemeContext";
import { Route } from "react-router-dom";

function PortfolioDetail(props) {
  const { personID } = useParams();
  const person = Portfolio.filter(item => item._id === Number(personID)).map(
    item => (
      <div className="container">
        <div className="d-flex justify-content-center">
          <img src={`${item.imgURL}`} />
        </div>
        <h1 className="mb-3">{item.title}</h1>
        <p className="department">{item.detail}</p>
      </div>
    )
  );

  return <>{person}</>;
}

export default PortfolioDetail;
