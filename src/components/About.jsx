import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { Portfolio } from "../Data_List/Portfolio";
import PortfolioDetail from "./PortfolioDetail";

function About() {
  const portfolioMap = Portfolio.map((item, key) => (
    <li className="mx-3 py-5" key={key}>
      <Link to={`/About/${item._id}`}>{item.title}</Link>
    </li>
  ));

  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className={`container-fluid px-5 mx-0 bg-${theme} text-${constrat}`}>
      <div className="container py-5">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut
          illum soluta? Minima ratione odio magni rem, voluptates, accusamus,
          sequi vitae non error repellat veniam. Obcaecati consectetur quasi
          vitae architecto!
        </p>
        <div className="mx- auto d-flex justify-content-center">
          {portfolioMap}
        </div>
        <Switch>
          <Route path="/About/:heroesID">
            <PortfolioDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default About;
