import logo from './logo.svg';
import './App.css';
import React from 'react';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text="pagina1"/>
        <h1>
          Change
        </h1>

      </header>
    </div>
  );
}

export default App;
