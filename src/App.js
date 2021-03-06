import "./App.css";
import React, { useState } from "react";
import About from "./Views/About";
import Menu from "./components/Menu";
import Portfolio from "./Views/Portfolio";
import { Router, navigate } from "@reach/router";
import {
  Grid,
  Column,
  Container,
  Modal,
  Button,
  Image,
  Header,
  Icon,
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
            <Grid centered={true} columns={4}>
              <Grid.Column style={{ marginTop: "20px", padding: "10px" }}>
                <Icon name="git" size="large" circular />
              </Grid.Column>
              <Grid.Column style={{ marginTop: "20px", padding: "10px" }}>
                <Icon name="facebook" size="large" circular />
              </Grid.Column>
              <Grid.Column style={{ marginTop: "20px", padding: "10px" }}>
                <Icon name="linkedin" size="large" circular />
              </Grid.Column>
            </Grid>
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
