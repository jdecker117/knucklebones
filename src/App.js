import './App.css';
import React, { useEffect, useState } from "react"

import Board1 from './components/Board1'
import Board2 from './components/Board2'

import DiceImage1 from './images/one.png'
import DiceImage2 from './images/two.png'
import DiceImage3 from './images/three.png'
import DiceImage4 from './images/four.png'
import DiceImage5 from './images/five.png'
import DiceImage6 from './images/six.png'

const diceImages = [
  DiceImage1,
  DiceImage2,
  DiceImage3,
  DiceImage4,
  DiceImage5,
  DiceImage6,
  
]

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

  const rollDice = () => {
    let random = getRandomNumber()
    setDice(diceImages[random])
  }

  const [playerOneTurn, setTurn] = useState(true)
  const [playerOneScore, setOneScore] = useState(0)
  const [playerTwoScore, setTwoScore] = useState(0)
  const [dice, setDice] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Knucklebones</h1>
      </header>
      <div id='scoreboard'>
        <h2>Player {playerOneTurn ? "One's" : "Two's"} Turn</h2>
      </div>
      <Board1></Board1>
      <img className='tile' id='dicecontainer' src={dice}></img>
      <button id='roller' onClick={rollDice}>Roll Dice</button>
      <Board2></Board2>
    </div>
  );
}

export default App;
