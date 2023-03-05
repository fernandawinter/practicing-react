import React from "react";
import "./Card.css";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Card = ({ buttonOnClick, title, body, buttonText }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <Title text={title}/>
        <Paragraph text={body}/>
        <Button onClick={buttonOnClick} text={buttonText}/>
      </div>
    </div>
  );
};

export default Card;
