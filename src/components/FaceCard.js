import React from "react";
import { Card } from "semantic-ui-react";

const FaceCard = ({ pic }) => {
  return (
    <>
      <Card>
        <div class="image">
          <img alt="hunter" src={pic} />
        </div>
        <div class="content">
          <div class="header">Hunter Kam</div>
          <div className="meta">
            <span class="date">Web Developer</span>
          </div>
          <div className="location">
            <i class="us flag"></i>
            <span>Seattle, WA</span>
          </div>
        </div>
      </Card>
    </>
  );
};
export default FaceCard;
