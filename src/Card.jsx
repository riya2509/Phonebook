import React from "react";
import "./Card.css";
function Card(props) {
  const value = props.data;
  return (
    <div className="container">
      <div className="image">
        <img src={value.url} alt={value.name} width={200} height={200} />
      </div>
      <div className="name">{value.name}</div>
      <div className="mobile">{value.contact}</div>
    </div>
  );
}

export default Card;
