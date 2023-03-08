import React from "react";
import "./Card.css";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

const cardContainerStyle = {
  width: '300px',
  overflow: 'hidden',
  boxShadow: '0px 0px 15px -5px',
  transition: '0.3s',
  animation: 'ease-in',
  padding: '10px',
  borderRadius: '20px',
  border: 'solid 2px',
};

const Card = ({ firstButtonOnClick, secondButtonOnClick, title, firstParagraph, secondParagraph, firstButton, secondButton }) => {
  return (
    <div style={cardContainerStyle}>
      <div className="card-content">
        <Title text={title}/>
        <Paragraph text={firstParagraph}/>
        <Paragraph text={secondParagraph}/>
        <Button onClick={firstButtonOnClick} text={firstButton}/>
        <Button onClick={secondButtonOnClick} text={secondButton}/>
      </div>
    </div>
  );
};

export default Card;
