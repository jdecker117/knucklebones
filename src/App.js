import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

const startingTiles = [
  { 
    "a1": null,
    "a2": null,
    "a3": null,
    "a4": null,
    "a5": null,
    "a6": null,
    "a7": null,
    "a8": null,
    "a9": null
  },
  { 
    "b1": null,
    "b2": null,
    "b3": null,
    "b4": null,
    "b5": null,
    "b6": null,
    "b7": null,
    "b8": null,
    "b9": null
  }
]

function App() {

  let getRandomNumber = () => {
    return Math.floor(Math.random() * 6 ) + 1
  }

  getRandomNumber()

  const [playerOneTurn, setTurn] = useState(true)
  const [playerOneScore, setOneScore] = useState(0)
  const [playerTwoScore, setTwoScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Knucklebones</h1>
      </header>
      <div id='scoreboard'>
        <h2>Player {playerOneTurn ? "One's" : "Two's"} Turn</h2>
      </div>
      {playerOneTurn ? <div className="dice-container" id="player1"></div> : <></>}
        <div className='board-container'>
          <div className="board" id="board1">
            <div className="tile" id="a1"></div>
            <div className="tile" id="a2"></div>
            <div className="tile" id="a3"></div>
            <div className="tile" id="a4"></div>
            <div className="tile" id="a5"></div>
            <div className="tile" id="a6"></div>
            <div className="tile" id="a7"></div>
            <div className="tile" id="a8"></div>
            <div className="tile" id="a9"></div>
          </div>
        </div>
        {playerOneTurn ? <></> : <div className="dice-container" id="player2"></div>}
        <div className='board-container'>
          <div className="board" id="board2">
            <div className="tile" id="b1"></div>
            <div className="tile" id="b2"></div>
            <div className="tile" id="b3"></div>
            <div className="tile" id="b4"></div>
            <div className="tile" id="b5"></div>
            <div className="tile" id="b6"></div>
            <div className="tile" id="b7"></div>
            <div className="tile" id="b8"></div>
            <div className="tile" id="b9"></div>
          </div>
        </div>
    </div>
  );
}

export default App;
