import "./App.css";
import React, { useState } from "react";
import About from "./Views/About";
import Menu from "./components/Menu";
import Contact from "./Views/Contact";
import Portfolio from "./Views/Portfolio";
import { Router, navigate } from "@reach/router";
import { Grid, Container, Segment } from "semantic-ui-react";

const App = () => {
  // Menu
  const [selectedPage, setSelectedPage] = useState("About");
  const pages = ["About", "Portfolio", "Contact"];

  const clickHandler = (page) => {
    setSelectedPage(page);
    page === "About" ? navigate("/") : navigate(`/${page}`);
  };

  return (
    <Container>
      <Grid.Row className="navbar">
        <Menu
          pages={pages}
          selectedPage={selectedPage}
          clickHandler={clickHandler}
        />
      </Grid.Row>
      <Grid.Row className="content">
        <Router>
          <About path="/" />
          <Portfolio path="/Portfolio" />
          <Contact path="/Contact" />
        </Router>
      </Grid.Row>
    </Container>
  );
};

export default App;
