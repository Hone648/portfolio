import React from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";
import ModalPic from "../images/uglyMe.jpg";

const Menu = ({ pages, selectedPage, clickHandler }) => {
  const [open, setOpen] = React.useState(false);

  const renderedList = pages.map((page) => {
    const active = page === selectedPage ? "active" : "";
    return (
      <div
        className={`item ${active}`}
        key={page}
        onClick={() => clickHandler(page)}
      >
        {page}
      </div>
    );
  });
  return (
    <div>
      <div class="ui top secondary pointing menu">{renderedList}</div>
      <div className={`item`} key={"contact"}>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<p>Contact</p>}
        >
          <Modal.Header>Contact Info</Modal.Header>
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
      </div>
    </div>
  );
};
export default Menu;
