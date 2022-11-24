import React from 'react'

export default function Board1({playerOneTurn, dice, assignDice, playerOneState, playerTwoState}) {

console.log(playerOneState[0].source)

  return (
    <div className='board-container'>
        <div style={{ pointerEvents: playerOneTurn ? "auto" : "none" }} className="board" id="board1">
            <img className="tile" id="1" onClick={assignDice} src={playerOneState[0].source}></img>
            <img className="tile" id="2" onClick={assignDice} src={playerOneState[1].source}></img>
            <img className="tile" id="3" onClick={assignDice} src={playerOneState[2].source}></img>
            <img className="tile" id="4" onClick={assignDice} src={playerOneState[3].source}></img>
            <img className="tile" id="5" onClick={assignDice} src={playerOneState[4].source}></img>
            <img className="tile" id="6" onClick={assignDice} src={playerOneState[5].source}></img>
            <img className="tile" id="7" onClick={assignDice} src={playerOneState[6].source}></img>
            <img className="tile" id="8" onClick={assignDice} src={playerOneState[7].source}></img>
            <img className="tile" id="9" onClick={assignDice} src={playerOneState[8].source}></img>
        </div>
    </div>
  )
}
