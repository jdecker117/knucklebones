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

const diceInfo = [ 
  {source: DiceImage1, value: 1},
  {source: DiceImage2, value: 2},
  {source: DiceImage3, value: 3},
  {source: DiceImage4, value: 4},
  {source: DiceImage5, value: 5},
  {source: DiceImage6, value: 6}, 
]

let playerOneInitial = [
  {id: 1, source: null, value: 0},
  {id: 2, source: null, value: 0},
  {id: 3, source: null, value: 0},
  {id: 4, source: null, value: 0},
  {id: 5, source: null, value: 0},
  {id: 6, source: null, value: 0},
  {id: 7, source: null, value: 0},
  {id: 8, source: null, value: 0},
  {id: 9, source: null, value: 0}
]

let playerTwoInitial = [
  {id: 1, source: null, value: 0},
  {id: 2, source: null, value: 0},
  {id: 3, source: null, value: 0},
  {id: 4, source: null, value: 0},
  {id: 5, source: null, value: 0},
  {id: 6, source: null, value: 0},
  {id: 7, source: null, value: 0},
  {id: 8, source: null, value: 0},
  {id: 9, source: null, value: 0}
]



function App() {

  const [playerOneTurn, setTurn] = useState(true)
  const [playerOneState, setOneState] = useState(playerOneInitial)
  const [playerTwoState, setTwoState] = useState(playerTwoInitial)
  const [dice, setDice] = useState({})

  let getRandomNumber = () => {
    return Math.floor(Math.random() * 6 )
  }

  const rollDice = () => {
    let random = getRandomNumber()
    setDice(diceInfo[random])
  }

  // const checkCounter = () => {
  //   for(let i = 0; i < 3; i++) {
  //     if(playerOneTurn) {
  //       if((playerOneState[i].value == playerTwoState[i].value && playerTwoState[i].value != 0) ||
  //       (playerOneState[i].value == playerTwoState[i+3].value && playerTwoState[i+3].value != 0) ||
  //       (playerOneState[i].value == playerTwoState[i+6].value && playerTwoState[i+6].value != 0)) {
  //         setTwoState([...playerTwoState, {...playerTwoState[i], source: null, value: 0},
  //           {...playerTwoState[i+3], source: null, value: 0},
  //           {...playerTwoState[i+6], source: null, value: 0}])
  //       }
  //     } else {
  //       if((playerTwoState[i].value == playerOneState[i].value && playerOneState[i].value != 0) ||
  //       (playerTwoState[i].value == playerOneState[i+3].value && playerOneState[i+3].value != 0) ||
  //       (playerTwoState[i].value == playerOneState[i+6].value && playerOneState[i+6].value != 0)) {
  //         setOneState([...playerOneState, {...playerOneState[i], source: null, value: 0},
  //           {...playerOneState[i+3], source: null, value: 0},
  //           {...playerOneState[i+6], source: null, value: 0}])
  //       }
  //     } 
  //   }
  // }

  const assignDice = (evt) => {
    if(evt.target.src.length == 0) {
      if(playerOneTurn) {
        const newState = playerOneState.map(obj => {
          if(evt.target.id == obj.id) {
            return {...obj, source: dice.source, value: dice.value}
          } else return obj
        })
        setOneState(newState)
      } else {
        const newState = playerTwoState.map(obj => {
          if(evt.target.id == obj.id) {
            return {...obj, source: dice.source, value: dice.value}
          } else return obj
        })
        setTwoState(newState)
      }
      setTurn(!playerOneTurn)
      setDice({})
    }
  }

  useEffect(() => {
    // checkCounter()
  }, [playerOneTurn])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Knucklebones</h1>
      </header>
      <div id='scoreboard'>
        <h2>Player {playerOneTurn ? "One's" : "Two's"} Turn</h2>
      </div>
      <Board1 playerOneTurn={playerOneTurn} dice={dice} assignDice={assignDice} 
      playerOneState={playerOneState} playerTwoState={playerTwoState}></Board1>
      <img className='tile' id='dicecontainer' src={dice.source} value={dice}></img>
      <button disabled={dice.source} id='roller' onClick={rollDice}>Roll Dice</button>
      <Board2 playerOneTurn={playerOneTurn} dice={dice} assignDice={assignDice} 
      playerOneState={playerOneState} playerTwoState={playerTwoState}></Board2>
    </div>
  );
}

export default App;
