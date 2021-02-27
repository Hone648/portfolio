import React from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";

const Menu = ({ pages, selectedPage, clickHandler, modal }) => {
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
      <div class="ui top secondary pointing menu">
        {renderedList}
        {modal}
      </div>
      <div className={`item`} key={"contact"}></div>
    </div>
  );
};
export default Menu;
