import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DATA_LIST from "../Data_List/Data_List.js";
import Card from "../components/Card";

function AllCard(props) {
  const CardComp = DATA_LIST.map((item, index) => (
    <Card
      imgURL={item.imgURL}
      title={item.title}
      secondTitle={item.secondTitle}
      key={index}
      id={index}
    />
  ));

  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";

  return (
    <div className={`container-fluid px-5 mx-0 bg-${theme} text-${constrat}`}>
      <div className="row">
        <Route path="/">{CardComp}</Route>
      </div>
    </div>
  );
}
export default AllCard;
