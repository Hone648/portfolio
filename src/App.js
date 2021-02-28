import "./App.css";
import React, { useState } from "react";
import About from "./Views/About";
import Menu from "./components/Menu";
import Portfolio from "./Views/Portfolio";
import { Router, navigate } from "@reach/router";
import {
  Grid,
  Container,
  Modal,
  Button,
  Image,
  Header,
} from "semantic-ui-react";
import ModalPic from "./images/mail.png";

const App = () => {
  // Menu logic
  const [open, setOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = useState("About");
  const pages = ["About", "Portfolio"];
  const contactModal = () => {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<div className="item">Contact</div>}
      >
        <Modal.Header>Contact Me</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={ModalPic} wrapped />
          <Modal.Description>
            <Header>Find me on social media</Header>
            <p>**This will be icons/links**</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="No thanks, I'm good"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  };
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
          modal={contactModal()}
        />
      </Grid.Row>
      <Grid.Row className="content">
        <Router>
          <About path="/" />
          <Portfolio path="/Portfolio" />
        </Router>
      </Grid.Row>
    </Container>
  );
};

export default App;
