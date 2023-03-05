import React from "react";
import "./Card.css";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Card = ({ buttonOnClick, title, firstParagraph, secondParagraph, firstButton, secondButton }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <Title text={title}/>
        <Paragraph text={firstParagraph}/>
        <Paragraph text={secondParagraph}/>
        <Button onClick={buttonOnClick} text={firstButton}/>
        <Button onClick={buttonOnClick} text={secondButton}/>
      </div>
    </div>
  );
};

export default Card;
