import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  function onClickFunction() {
    alert("You clicked on me!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text="my Title" />
        <Paragraph text="my Paragraph" />
        <Button onClick={onClickFunction} text="my Button" />
        <Card onClick={onClickFunction} title="Card Title" body="Here comes the card text!" buttonText="It's the button text!"/>
      </header>
    </div>
  );
}

export default App;
