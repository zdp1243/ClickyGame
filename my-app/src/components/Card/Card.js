import React from "react";

const Card = props => (
  <div className="cardwrapper">
    <img src={props.children.image} />
  </div>
);

export default Card;
