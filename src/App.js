import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {

  function onClickFirstButton() {
    alert("You clicked the first button!");
  }

  function onClickSecondButton() {
    alert("You clicked the second button!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text="my Title" />
        <Paragraph text="my Paragraph" />
        {/* <Button onClick={onClickFunction} text="my Button" /> */}
        <Card
          firstButtonOnClick={onClickFirstButton}
          secondButtonOnClick={onClickSecondButton}
          title="Card Title"
          firstParagraph="Here comes the first card text!"
          secondParagraph="Here comes the second card text!"
          firstButton="Cancelar"
          secondButton="Aplicar"
        />
      </header>
    </div>
  );
}

export default App;
