import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import Breakout from "./breakout";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/breakout">打砖块</Link>
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <Router>
      <Nav path="/"></Nav>
      <Breakout path="/breakout"></Breakout>
    </Router>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
