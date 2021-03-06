import React from "react";

const Menu = ({ pages, selectedPage, clickHandler, modal }) => {
  const renderedList = pages.map((page) => {
    const active = page === selectedPage ? "active" : "";
    return (
      <div
        className={`item ${active}`}
        key={page}
        onClick={() => clickHandler(page)}
        id="page"
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
